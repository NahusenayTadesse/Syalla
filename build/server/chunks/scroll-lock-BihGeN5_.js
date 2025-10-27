import { w as watch, c as createBitsAttrs, b as boxWith, X as SvelteMap, Y as isBrowser, n as noop, C as Context, s as simpleBox, D as DOMContext, Z as ESCAPE, _ as executeCallbacks, $ as composeHandlers, a0 as isHTMLElement, a1 as contains, M as isIOS, k as isElementOrSVGElement } from './create-id-BRPGfuoy.js';
import { a5 as getAllContexts } from './context-Daw8ILuF.js';
import { t as tick, m as mount, u as unmount } from './index-server-CHpaVqRR.js';
import { o as on } from './events-C4reYfga.js';

/*!
* tabbable 6.3.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
// CAREFUL: JSDom does not support `:not([inert] *)` as a selector; using it causes
//  the entire query to fail, resulting in no nodes found, which will break a lot
//  of things... so we have to rely on JS to identify nodes inside an inert container
var candidateSelectors = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Element} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var _isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  // CAREFUL: JSDom does not appear to support certain selectors like `:not([inert] *)`
  //  so it likely would not support `:is([inert] *)` either...
  var result = inert || lookUp && node && _isInert(node.parentNode); // recursive

  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert, all its children are inert
  if (_isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (_isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = _getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  if (displayCheck === 'full-native') {
    if ('checkVisibility' in node) {
      // Chrome >= 105, Edge >= 105, Firefox >= 106, Safari >= 17.4
      // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/checkVisibility#browser_compatibility
      var visible = node.checkVisibility({
        // Checking opacity might be desirable for some use cases, but natively,
        // opacity zero elements _are_ focusable and tabbable.
        checkOpacity: false,
        opacityProperty: false,
        contentVisibilityAuto: true,
        visibilityProperty: true,
        // This is an alias for `visibilityProperty`. Contemporary browsers
        // support both. However, this alias has wider browser support (Chrome
        // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
        // we include it anyway.
        checkVisibilityCSS: true
      });
      return !visible;
    }
    // Fall through to manual visibility checks
  }

  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' ||
  // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  displayCheck === 'full-native' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled ||
  // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  _isInert(node) || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var _sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? _sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = _getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return _sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = _getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};

function afterSleep(ms, cb) {
  return setTimeout(cb, ms);
}
function afterTick(fn) {
  tick().then(fn);
}
class AnimationsComplete {
  #opts;
  #currentFrame = null;
  constructor(opts) {
    this.#opts = opts;
  }
  #cleanup() {
    if (!this.#currentFrame)
      return;
    window.cancelAnimationFrame(this.#currentFrame);
    this.#currentFrame = null;
  }
  run(fn) {
    this.#cleanup();
    const node = this.#opts.ref.current;
    if (!node)
      return;
    if (typeof node.getAnimations !== "function") {
      this.#executeCallback(fn);
      return;
    }
    this.#currentFrame = window.requestAnimationFrame(() => {
      const animations = node.getAnimations();
      if (animations.length === 0) {
        this.#executeCallback(fn);
        return;
      }
      Promise.allSettled(animations.map((animation) => animation.finished)).then(() => {
        this.#executeCallback(fn);
      });
    });
  }
  #executeCallback(fn) {
    const execute = () => {
      fn();
    };
    if (this.#opts.afterTick) {
      afterTick(execute);
    } else {
      execute();
    }
  }
}
class PresenceManager {
  #opts;
  #enabled;
  #afterAnimations;
  #shouldRender = false;
  constructor(opts) {
    this.#opts = opts;
    this.#shouldRender = opts.open.current;
    this.#enabled = opts.enabled ?? true;
    this.#afterAnimations = new AnimationsComplete({ ref: this.#opts.ref, afterTick: this.#opts.open });
    watch(() => this.#opts.open.current, (isOpen) => {
      if (isOpen) this.#shouldRender = true;
      if (!this.#enabled) return;
      this.#afterAnimations.run(() => {
        if (isOpen === this.#opts.open.current) {
          if (!this.#opts.open.current) {
            this.#shouldRender = false;
          }
          this.#opts.onComplete?.();
        }
      });
    });
  }
  get shouldRender() {
    return this.#shouldRender;
  }
}
const BitsConfigContext = new Context("BitsConfig");
function getBitsConfig() {
  const fallback = new BitsConfigState(null, {});
  return BitsConfigContext.getOr(fallback).opts;
}
class BitsConfigState {
  opts;
  constructor(parent, opts) {
    const resolveConfigOption = createConfigResolver(parent, opts);
    this.opts = {
      defaultPortalTo: resolveConfigOption((config) => config.defaultPortalTo),
      defaultLocale: resolveConfigOption((config) => config.defaultLocale)
    };
  }
}
function createConfigResolver(parent, currentOpts) {
  return (getter) => {
    const configOption = boxWith(() => {
      const value = getter(currentOpts)?.current;
      if (value !== void 0)
        return value;
      if (parent === null)
        return void 0;
      return getter(parent.opts)?.current;
    });
    return configOption;
  };
}
function createPropResolver(configOption, fallback) {
  return (getProp) => {
    const config = getBitsConfig();
    return boxWith(() => {
      const propValue = getProp();
      if (propValue !== void 0)
        return propValue;
      const option = configOption(config).current;
      if (option !== void 0)
        return option;
      return fallback;
    });
  };
}
const resolvePortalToProp = createPropResolver((config) => config.defaultPortalTo, "body");
function Portal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { to: toProp, children, disabled } = $$props;
    const to = resolvePortalToProp(() => toProp);
    getAllContexts();
    let target = getTarget();
    function getTarget() {
      if (!isBrowser || disabled) return null;
      let localTarget = null;
      if (typeof to.current === "string") {
        const target2 = document.querySelector(to.current);
        localTarget = target2;
      } else {
        localTarget = to.current;
      }
      return localTarget;
    }
    let instance;
    function unmountInstance() {
      if (instance) {
        unmount();
        instance = null;
      }
    }
    watch([() => target, () => disabled], ([target2, disabled2]) => {
      if (!target2 || disabled2) {
        unmountInstance();
        return;
      }
      instance = mount();
      return () => {
        unmountInstance();
      };
    });
    if (disabled) {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function debounce(fn, wait = 500) {
  let timeout = null;
  const debounced = (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
  debounced.destroy = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
}
function isOrContainsTarget(node, target) {
  return node === target || node.contains(target);
}
function getOwnerDocument(el) {
  return el?.ownerDocument ?? document;
}
function getFirstNonCommentChild(element) {
  if (!element)
    return null;
  for (const child of element.childNodes) {
    if (child.nodeType !== Node.COMMENT_NODE) {
      return child;
    }
  }
  return null;
}
function isClickTrulyOutside(event, contentNode) {
  const { clientX, clientY } = event;
  const rect = contentNode.getBoundingClientRect();
  return clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom;
}
const CONTEXT_MENU_TRIGGER_ATTR = "data-context-menu-trigger";
const CONTEXT_MENU_CONTENT_ATTR = "data-context-menu-content";
createBitsAttrs({
  component: "menu",
  parts: [
    "trigger",
    "content",
    "sub-trigger",
    "item",
    "group",
    "group-heading",
    "checkbox-group",
    "checkbox-item",
    "radio-group",
    "radio-item",
    "separator",
    "sub-content",
    "arrow"
  ]
});
globalThis.bitsDismissableLayers ??= /* @__PURE__ */ new Map();
class DismissibleLayerState {
  static create(opts) {
    return new DismissibleLayerState(opts);
  }
  opts;
  #interactOutsideProp;
  #behaviorType;
  #interceptedEvents = { pointerdown: false };
  #isResponsibleLayer = false;
  #isFocusInsideDOMTree = false;
  #documentObj = void 0;
  #onFocusOutside;
  #unsubClickListener = noop;
  constructor(opts) {
    this.opts = opts;
    this.#behaviorType = opts.interactOutsideBehavior;
    this.#interactOutsideProp = opts.onInteractOutside;
    this.#onFocusOutside = opts.onFocusOutside;
    let unsubEvents = noop;
    const cleanup = () => {
      this.#resetState();
      globalThis.bitsDismissableLayers.delete(this);
      this.#handleInteractOutside.destroy();
      unsubEvents();
    };
    watch([() => this.opts.enabled.current, () => this.opts.ref.current], () => {
      if (!this.opts.enabled.current || !this.opts.ref.current) return;
      afterSleep(1, () => {
        if (!this.opts.ref.current) return;
        globalThis.bitsDismissableLayers.set(this, this.#behaviorType);
        unsubEvents();
        unsubEvents = this.#addEventListeners();
      });
      return cleanup;
    });
  }
  #handleFocus = (event) => {
    if (event.defaultPrevented) return;
    if (!this.opts.ref.current) return;
    afterTick(() => {
      if (!this.opts.ref.current || this.#isTargetWithinLayer(event.target)) return;
      if (event.target && !this.#isFocusInsideDOMTree) {
        this.#onFocusOutside.current?.(event);
      }
    });
  };
  #addEventListeners() {
    return executeCallbacks(
      /**
       * CAPTURE INTERACTION START
       * mark interaction-start event as intercepted.
       * mark responsible layer during interaction start
       * to avoid checking if is responsible layer during interaction end
       * when a new floating element may have been opened.
       */
      on(this.#documentObj, "pointerdown", executeCallbacks(this.#markInterceptedEvent, this.#markResponsibleLayer), { capture: true }),
      /**
       * BUBBLE INTERACTION START
       * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
       * to avoid prematurely checking if other events were intercepted.
       */
      on(this.#documentObj, "pointerdown", executeCallbacks(this.#markNonInterceptedEvent, this.#handleInteractOutside)),
      /**
       * HANDLE FOCUS OUTSIDE
       */
      on(this.#documentObj, "focusin", this.#handleFocus)
    );
  }
  #handleDismiss = (e) => {
    let event = e;
    if (event.defaultPrevented) {
      event = createWrappedEvent(e);
    }
    this.#interactOutsideProp.current(e);
  };
  #handleInteractOutside = debounce(
    (e) => {
      if (!this.opts.ref.current) {
        this.#unsubClickListener();
        return;
      }
      const isEventValid = this.opts.isValidEvent.current(e, this.opts.ref.current) || isValidEvent(e, this.opts.ref.current);
      if (!this.#isResponsibleLayer || this.#isAnyEventIntercepted() || !isEventValid) {
        this.#unsubClickListener();
        return;
      }
      let event = e;
      if (event.defaultPrevented) {
        event = createWrappedEvent(event);
      }
      if (this.#behaviorType.current !== "close" && this.#behaviorType.current !== "defer-otherwise-close") {
        this.#unsubClickListener();
        return;
      }
      if (e.pointerType === "touch") {
        this.#unsubClickListener();
        this.#unsubClickListener = on(this.#documentObj, "click", this.#handleDismiss, { once: true });
      } else {
        this.#interactOutsideProp.current(event);
      }
    },
    10
  );
  #markInterceptedEvent = (e) => {
    this.#interceptedEvents[e.type] = true;
  };
  #markNonInterceptedEvent = (e) => {
    this.#interceptedEvents[e.type] = false;
  };
  #markResponsibleLayer = () => {
    if (!this.opts.ref.current) return;
    this.#isResponsibleLayer = isResponsibleLayer(this.opts.ref.current);
  };
  #isTargetWithinLayer = (target) => {
    if (!this.opts.ref.current) return false;
    return isOrContainsTarget(this.opts.ref.current, target);
  };
  #resetState = debounce(
    () => {
      for (const eventType in this.#interceptedEvents) {
        this.#interceptedEvents[eventType] = false;
      }
      this.#isResponsibleLayer = false;
    },
    20
  );
  #isAnyEventIntercepted() {
    const i = Object.values(this.#interceptedEvents).some(Boolean);
    return i;
  }
  #onfocuscapture = () => {
    this.#isFocusInsideDOMTree = true;
  };
  #onblurcapture = () => {
    this.#isFocusInsideDOMTree = false;
  };
  props = {
    onfocuscapture: this.#onfocuscapture,
    onblurcapture: this.#onblurcapture
  };
}
function getTopMostDismissableLayer(layersArr = [...globalThis.bitsDismissableLayers]) {
  return layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
}
function isResponsibleLayer(node) {
  const layersArr = [...globalThis.bitsDismissableLayers];
  const topMostLayer = getTopMostDismissableLayer(layersArr);
  if (topMostLayer) return topMostLayer[0].opts.ref.current === node;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode.opts.ref.current === node;
}
function isValidEvent(e, node) {
  const target = e.target;
  if (!isElementOrSVGElement(target)) return false;
  const targetIsContextMenuTrigger = Boolean(target.closest(`[${CONTEXT_MENU_TRIGGER_ATTR}]`));
  if ("button" in e && e.button > 0 && !targetIsContextMenuTrigger) return false;
  if ("button" in e && e.button === 0 && targetIsContextMenuTrigger) return true;
  const nodeIsContextMenu = Boolean(node.closest(`[${CONTEXT_MENU_CONTENT_ATTR}]`));
  if (targetIsContextMenuTrigger && nodeIsContextMenu) return false;
  const ownerDocument = getOwnerDocument(target);
  const isValid = ownerDocument.documentElement.contains(target) && !isOrContainsTarget(node, target) && isClickTrulyOutside(e, node);
  return isValid;
}
function createWrappedEvent(e) {
  const capturedCurrentTarget = e.currentTarget;
  const capturedTarget = e.target;
  let newEvent;
  if (e instanceof PointerEvent) {
    newEvent = new PointerEvent(e.type, e);
  } else {
    newEvent = new PointerEvent("pointerdown", e);
  }
  let isPrevented = false;
  const wrappedEvent = new Proxy(newEvent, {
    get: (target, prop) => {
      if (prop === "currentTarget") {
        return capturedCurrentTarget;
      }
      if (prop === "target") {
        return capturedTarget;
      }
      if (prop === "preventDefault") {
        return () => {
          isPrevented = true;
          if (typeof target.preventDefault === "function") {
            target.preventDefault();
          }
        };
      }
      if (prop === "defaultPrevented") {
        return isPrevented;
      }
      if (prop in target) {
        return target[prop];
      }
      return e[prop];
    }
  });
  return wrappedEvent;
}
function Dismissible_layer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      interactOutsideBehavior = "close",
      onInteractOutside = noop,
      onFocusOutside = noop,
      id,
      children,
      enabled,
      isValidEvent: isValidEvent2 = () => false,
      ref
    } = $$props;
    const dismissibleLayerState = DismissibleLayerState.create({
      id: boxWith(() => id),
      interactOutsideBehavior: boxWith(() => interactOutsideBehavior),
      onInteractOutside: boxWith(() => onInteractOutside),
      enabled: boxWith(() => enabled),
      onFocusOutside: boxWith(() => onFocusOutside),
      isValidEvent: boxWith(() => isValidEvent2),
      ref
    });
    children?.($$renderer2, { props: dismissibleLayerState.props });
    $$renderer2.push(`<!---->`);
  });
}
globalThis.bitsEscapeLayers ??= /* @__PURE__ */ new Map();
class EscapeLayerState {
  static create(opts) {
    return new EscapeLayerState(opts);
  }
  opts;
  domContext;
  constructor(opts) {
    this.opts = opts;
    this.domContext = new DOMContext(this.opts.ref);
    let unsubEvents = noop;
    watch(() => opts.enabled.current, (enabled) => {
      if (enabled) {
        globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
        unsubEvents = this.#addEventListener();
      }
      return () => {
        unsubEvents();
        globalThis.bitsEscapeLayers.delete(this);
      };
    });
  }
  #addEventListener = () => {
    return on(this.domContext.getDocument(), "keydown", this.#onkeydown, { passive: false });
  };
  #onkeydown = (e) => {
    if (e.key !== ESCAPE || !isResponsibleEscapeLayer(this)) return;
    const clonedEvent = new KeyboardEvent(e.type, e);
    e.preventDefault();
    const behaviorType = this.opts.escapeKeydownBehavior.current;
    if (behaviorType !== "close" && behaviorType !== "defer-otherwise-close") return;
    this.opts.onEscapeKeydown.current(clonedEvent);
  };
}
function isResponsibleEscapeLayer(instance) {
  const layersArr = [...globalThis.bitsEscapeLayers];
  const topMostLayer = layersArr.findLast(([_, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
  if (topMostLayer) return topMostLayer[0] === instance;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode === instance;
}
function Escape_layer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      escapeKeydownBehavior = "close",
      onEscapeKeydown = noop,
      children,
      enabled,
      ref
    } = $$props;
    EscapeLayerState.create({
      escapeKeydownBehavior: boxWith(() => escapeKeydownBehavior),
      onEscapeKeydown: boxWith(() => onEscapeKeydown),
      enabled: boxWith(() => enabled),
      ref
    });
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
class FocusScopeManager {
  static instance;
  #scopeStack = simpleBox([]);
  #focusHistory = /* @__PURE__ */ new WeakMap();
  #preFocusHistory = /* @__PURE__ */ new WeakMap();
  static getInstance() {
    if (!this.instance) {
      this.instance = new FocusScopeManager();
    }
    return this.instance;
  }
  register(scope) {
    const current = this.getActive();
    if (current && current !== scope) {
      current.pause();
    }
    const activeElement = document.activeElement;
    if (activeElement && activeElement !== document.body) {
      this.#preFocusHistory.set(scope, activeElement);
    }
    this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
    this.#scopeStack.current.unshift(scope);
  }
  unregister(scope) {
    this.#scopeStack.current = this.#scopeStack.current.filter((s) => s !== scope);
    const next = this.getActive();
    if (next) {
      next.resume();
    }
  }
  getActive() {
    return this.#scopeStack.current[0];
  }
  setFocusMemory(scope, element) {
    this.#focusHistory.set(scope, element);
  }
  getFocusMemory(scope) {
    return this.#focusHistory.get(scope);
  }
  isActiveScope(scope) {
    return this.getActive() === scope;
  }
  setPreFocusMemory(scope, element) {
    this.#preFocusHistory.set(scope, element);
  }
  getPreFocusMemory(scope) {
    return this.#preFocusHistory.get(scope);
  }
  clearPreFocusMemory(scope) {
    this.#preFocusHistory.delete(scope);
  }
}
class FocusScope {
  #paused = false;
  #container = null;
  #manager = FocusScopeManager.getInstance();
  #cleanupFns = [];
  #opts;
  constructor(opts) {
    this.#opts = opts;
  }
  get paused() {
    return this.#paused;
  }
  pause() {
    this.#paused = true;
  }
  resume() {
    this.#paused = false;
  }
  #cleanup() {
    for (const fn of this.#cleanupFns) {
      fn();
    }
    this.#cleanupFns = [];
  }
  mount(container) {
    if (this.#container) {
      this.unmount();
    }
    this.#container = container;
    this.#manager.register(this);
    this.#setupEventListeners();
    this.#handleOpenAutoFocus();
  }
  unmount() {
    if (!this.#container) return;
    this.#cleanup();
    this.#handleCloseAutoFocus();
    this.#manager.unregister(this);
    this.#manager.clearPreFocusMemory(this);
    this.#container = null;
  }
  #handleOpenAutoFocus() {
    if (!this.#container) return;
    const event = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: false, cancelable: true });
    this.#opts.onOpenAutoFocus.current(event);
    if (!event.defaultPrevented) {
      requestAnimationFrame(() => {
        if (!this.#container) return;
        const firstTabbable = this.#getFirstTabbable();
        if (firstTabbable) {
          firstTabbable.focus();
          this.#manager.setFocusMemory(this, firstTabbable);
        } else {
          this.#container.focus();
        }
      });
    }
  }
  #handleCloseAutoFocus() {
    const event = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: false, cancelable: true });
    this.#opts.onCloseAutoFocus.current?.(event);
    if (!event.defaultPrevented) {
      const preFocusedElement = this.#manager.getPreFocusMemory(this);
      if (preFocusedElement && document.contains(preFocusedElement)) {
        try {
          preFocusedElement.focus();
        } catch {
          document.body.focus();
        }
      }
    }
  }
  #setupEventListeners() {
    if (!this.#container || !this.#opts.trap.current) return;
    const container = this.#container;
    const doc = container.ownerDocument;
    const handleFocus = (e) => {
      if (this.#paused || !this.#manager.isActiveScope(this)) return;
      const target = e.target;
      if (!target) return;
      const isInside = container.contains(target);
      if (isInside) {
        this.#manager.setFocusMemory(this, target);
      } else {
        const lastFocused = this.#manager.getFocusMemory(this);
        if (lastFocused && container.contains(lastFocused) && isFocusable(lastFocused)) {
          e.preventDefault();
          lastFocused.focus();
        } else {
          const firstTabbable = this.#getFirstTabbable();
          const firstFocusable = this.#getAllFocusables()[0];
          (firstTabbable || firstFocusable || container).focus();
        }
      }
    };
    const handleKeydown = (e) => {
      if (!this.#opts.loop || this.#paused || e.key !== "Tab") return;
      if (!this.#manager.isActiveScope(this)) return;
      const tabbables = this.#getTabbables();
      if (tabbables.length < 2) return;
      const first = tabbables[0];
      const last = tabbables[tabbables.length - 1];
      if (!e.shiftKey && doc.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && doc.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    };
    this.#cleanupFns.push(on(doc, "focusin", handleFocus, { capture: true }), on(container, "keydown", handleKeydown));
    const observer = new MutationObserver(() => {
      const lastFocused = this.#manager.getFocusMemory(this);
      if (lastFocused && !container.contains(lastFocused)) {
        const firstTabbable = this.#getFirstTabbable();
        const firstFocusable = this.#getAllFocusables()[0];
        const elementToFocus = firstTabbable || firstFocusable;
        if (elementToFocus) {
          elementToFocus.focus();
          this.#manager.setFocusMemory(this, elementToFocus);
        } else {
          container.focus();
        }
      }
    });
    observer.observe(container, { childList: true, subtree: true });
    this.#cleanupFns.push(() => observer.disconnect());
  }
  #getTabbables() {
    if (!this.#container) return [];
    return tabbable(this.#container, { includeContainer: false, getShadowRoot: true });
  }
  #getFirstTabbable() {
    const tabbables = this.#getTabbables();
    return tabbables[0] || null;
  }
  #getAllFocusables() {
    if (!this.#container) return [];
    return focusable(this.#container, { includeContainer: false, getShadowRoot: true });
  }
  static use(opts) {
    let scope = null;
    watch([() => opts.ref.current, () => opts.enabled.current], ([ref, enabled]) => {
      if (ref && enabled) {
        if (!scope) {
          scope = new FocusScope(opts);
        }
        scope.mount(ref);
      } else if (scope) {
        scope.unmount();
        scope = null;
      }
    });
    return {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
}
function Focus_scope($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      enabled = false,
      trapFocus = false,
      loop = false,
      onCloseAutoFocus = noop,
      onOpenAutoFocus = noop,
      focusScope,
      ref
    } = $$props;
    const focusScopeState = FocusScope.use({
      enabled: boxWith(() => enabled),
      trap: boxWith(() => trapFocus),
      loop,
      onCloseAutoFocus: boxWith(() => onCloseAutoFocus),
      onOpenAutoFocus: boxWith(() => onOpenAutoFocus),
      ref
    });
    focusScope?.($$renderer2, { props: focusScopeState.props });
    $$renderer2.push(`<!---->`);
  });
}
globalThis.bitsTextSelectionLayers ??= /* @__PURE__ */ new Map();
class TextSelectionLayerState {
  static create(opts) {
    return new TextSelectionLayerState(opts);
  }
  opts;
  domContext;
  #unsubSelectionLock = noop;
  constructor(opts) {
    this.opts = opts;
    this.domContext = new DOMContext(opts.ref);
    let unsubEvents = noop;
    watch(() => this.opts.enabled.current, (isEnabled) => {
      if (isEnabled) {
        globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
        unsubEvents();
        unsubEvents = this.#addEventListeners();
      }
      return () => {
        unsubEvents();
        this.#resetSelectionLock();
        globalThis.bitsTextSelectionLayers.delete(this);
      };
    });
  }
  #addEventListeners() {
    return executeCallbacks(on(this.domContext.getDocument(), "pointerdown", this.#pointerdown), on(this.domContext.getDocument(), "pointerup", composeHandlers(this.#resetSelectionLock, this.opts.onPointerUp.current)));
  }
  #pointerdown = (e) => {
    const node = this.opts.ref.current;
    const target = e.target;
    if (!isHTMLElement(node) || !isHTMLElement(target) || !this.opts.enabled.current) return;
    if (!isHighestLayer(this) || !contains(node, target)) return;
    this.opts.onPointerDown.current(e);
    if (e.defaultPrevented) return;
    this.#unsubSelectionLock = preventTextSelectionOverflow(node, this.domContext.getDocument().body);
  };
  #resetSelectionLock = () => {
    this.#unsubSelectionLock();
    this.#unsubSelectionLock = noop;
  };
}
const getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;
function preventTextSelectionOverflow(node, body) {
  const originalBodyUserSelect = getUserSelect(body);
  const originalNodeUserSelect = getUserSelect(node);
  setUserSelect(body, "none");
  setUserSelect(node, "text");
  return () => {
    setUserSelect(body, originalBodyUserSelect);
    setUserSelect(node, originalNodeUserSelect);
  };
}
function setUserSelect(node, value) {
  node.style.userSelect = value;
  node.style.webkitUserSelect = value;
}
function isHighestLayer(instance) {
  const layersArr = [...globalThis.bitsTextSelectionLayers];
  if (!layersArr.length) return false;
  const highestLayer = layersArr.at(-1);
  if (!highestLayer) return false;
  return highestLayer[0] === instance;
}
function Text_selection_layer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      preventOverflowTextSelection = true,
      onPointerDown = noop,
      onPointerUp = noop,
      id,
      children,
      enabled,
      ref
    } = $$props;
    TextSelectionLayerState.create({
      id: boxWith(() => id),
      onPointerDown: boxWith(() => onPointerDown),
      onPointerUp: boxWith(() => onPointerUp),
      enabled: boxWith(() => enabled && preventOverflowTextSelection),
      ref
    });
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
globalThis.bitsIdCounter ??= { current: 0 };
function useId(prefix = "bits") {
  globalThis.bitsIdCounter.current++;
  return `${prefix}-${globalThis.bitsIdCounter.current}`;
}
class SharedState {
  #factory;
  #subscribers = 0;
  #state;
  #scope;
  constructor(factory) {
    this.#factory = factory;
  }
  #dispose() {
    this.#subscribers -= 1;
    if (this.#scope && this.#subscribers <= 0) {
      this.#scope();
      this.#state = void 0;
      this.#scope = void 0;
    }
  }
  get(...args) {
    this.#subscribers += 1;
    if (this.#state === void 0) {
      this.#scope = () => {
      };
    }
    return this.#state;
  }
}
const lockMap = new SvelteMap();
let initialBodyStyle = null;
let cleanupTimeoutId = null;
let isInCleanupTransition = false;
const anyLocked = boxWith(() => {
  for (const value of lockMap.values()) {
    if (value) return true;
  }
  return false;
});
let cleanupScheduledAt = null;
const bodyLockStackCount = new SharedState(() => {
  function resetBodyStyle() {
    return;
  }
  function cancelPendingCleanup() {
    if (cleanupTimeoutId === null) return;
    window.clearTimeout(cleanupTimeoutId);
    cleanupTimeoutId = null;
  }
  function scheduleCleanupIfNoNewLocks(delay, callback) {
    cancelPendingCleanup();
    isInCleanupTransition = true;
    cleanupScheduledAt = Date.now();
    const currentCleanupId = cleanupScheduledAt;
    const cleanupFn = () => {
      cleanupTimeoutId = null;
      if (cleanupScheduledAt !== currentCleanupId) return;
      if (!isAnyLocked(lockMap)) {
        isInCleanupTransition = false;
        callback();
      } else {
        isInCleanupTransition = false;
      }
    };
    const actualDelay = delay === null ? 24 : delay;
    cleanupTimeoutId = window.setTimeout(cleanupFn, actualDelay);
  }
  function ensureInitialStyleCaptured() {
    if (initialBodyStyle === null && lockMap.size === 0 && !isInCleanupTransition) {
      initialBodyStyle = document.body.getAttribute("style");
    }
  }
  watch(() => anyLocked.current, () => {
    if (!anyLocked.current) return;
    ensureInitialStyleCaptured();
    isInCleanupTransition = false;
    const bodyStyle = getComputedStyle(document.body);
    const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const paddingRight = Number.parseInt(bodyStyle.paddingRight ?? "0", 10);
    const config = {
      padding: paddingRight + verticalScrollbarWidth,
      margin: Number.parseInt(bodyStyle.marginRight ?? "0", 10)
    };
    if (verticalScrollbarWidth > 0) {
      document.body.style.paddingRight = `${config.padding}px`;
      document.body.style.marginRight = `${config.margin}px`;
      document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
      document.body.style.overflow = "hidden";
    }
    if (isIOS) {
      on(
        document,
        "touchmove",
        (e) => {
          if (e.target !== document.documentElement) return;
          if (e.touches.length > 1) return;
          e.preventDefault();
        },
        { passive: false }
      );
    }
    afterTick(() => {
      document.body.style.pointerEvents = "none";
      document.body.style.overflow = "hidden";
    });
  });
  return {
    get lockMap() {
      return lockMap;
    },
    resetBodyStyle,
    scheduleCleanupIfNoNewLocks,
    cancelPendingCleanup,
    ensureInitialStyleCaptured
  };
});
class BodyScrollLock {
  #id = useId();
  #initialState;
  #restoreScrollDelay = () => null;
  #countState;
  locked;
  constructor(initialState, restoreScrollDelay = () => null) {
    this.#initialState = initialState;
    this.#restoreScrollDelay = restoreScrollDelay;
    this.#countState = bodyLockStackCount.get();
    if (!this.#countState) return;
    this.#countState.cancelPendingCleanup();
    this.#countState.ensureInitialStyleCaptured();
    this.#countState.lockMap.set(this.#id, this.#initialState ?? false);
    this.locked = boxWith(() => this.#countState.lockMap.get(this.#id) ?? false, (v) => this.#countState.lockMap.set(this.#id, v));
  }
}
function isAnyLocked(map) {
  for (const [_, value] of map) {
    if (value) return true;
  }
  return false;
}
function Scroll_lock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { preventScroll = true, restoreScrollDelay = null } = $$props;
    if (preventScroll) {
      new BodyScrollLock(preventScroll, () => restoreScrollDelay);
    }
  });
}

export { Dismissible_layer as D, Escape_layer as E, Focus_scope as F, PresenceManager as P, Scroll_lock as S, Text_selection_layer as T, Portal as a, afterTick as b, afterSleep as c, getFirstNonCommentChild as g, useId as u };
//# sourceMappingURL=scroll-lock-BihGeN5_.js.map
