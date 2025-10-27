import { c as bind_props, f as spread_props, p as props_id, g as attributes, d as derived, e as ensure_array_like, a as attr, s as stringify } from './index-CgayGINj.js';
import { d as cn, e as createId, b as boxWith, m as mergeProps, n as noop, w as watch, f as attachRef, C as Context, s as simpleBox, D as DOMContext, c as createBitsAttrs, r as styleToString, I as Icon, o as ARROW_UP, p as ARROW_DOWN, E as ENTER, S as SPACE, t as TAB, P as PAGE_UP, H as HOME, u as PAGE_DOWN, q as END, v as isElement$1, x as boxFrom, y as getWindow$1, z as defaultWindow, F as createSubscriber, G as cssToStyleObj, J as isNotNull, i as boolToEmptyStrOrUndef, g as getDataOpenClosed, h as boolToStr, K as boolToTrueOrUndef, L as boolToStrTrueOrUndef, j as glass, B as Button, M as isIOS, A as ARROW_LEFT, N as h, O as k, Q as p, l as ARROW_RIGHT, R as l, U as j, V as n, W as selectItem } from './create-id-BRPGfuoy.js';
import { o as on } from './events-C4reYfga.js';
import { n as next, p as prev, f as forward, b as backward, g as getNextMatch } from './arrays-DNpO5d2f.js';
import { P as PresenceManager, b as afterTick, a as Portal, c as afterSleep, u as useId, S as Scroll_lock, F as Focus_scope, E as Escape_layer, D as Dismissible_layer, T as Text_selection_layer, g as getFirstNonCommentChild } from './scroll-lock-BihGeN5_.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { t as tick } from './index-server-CHpaVqRR.js';
import { a2 as is_array, a3 as get_prototype_of, a4 as object_prototype } from './context-Daw8ILuF.js';

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/new Set(['top', 'bottom']);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ['left', 'right'];
const rlPlacement = ['right', 'left'];
const tbPlacement = ['top', 'bottom'];
const btPlacement = ['bottom', 'top'];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case 'left':
    case 'right':
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow$1 = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = clamp(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow ||
          // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every(d => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

const originSides = /*#__PURE__*/new Set(['left', 'top']);

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size$1 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/new Set(['inline', 'contents']);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/new Set(['table', 'td', 'th']);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(element) {
  return topLayerSelectors.some(selector => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ['transform', 'translate', 'scale', 'rotate', 'perspective'];
const willChangeValues = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'];
const containValues = ['paint', 'layout', 'strict', 'content'];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return transformProperties.some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some(value => (css.willChange || '').includes(value)) || containValues.some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/new Set(['html', 'body', '#document']);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, []));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
  // visual width of the <html> but this is not considered in the size
  // of `html.clientWidth`.
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    // If the <body> scrollbar is on the left, the width needs to be extended
    // by the scrollbar amount so there isn't extra space on the right.
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x,
    y
  };
}

const absoluteOrFixed = /*#__PURE__*/new Set(['absolute', 'fixed']);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, []).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);

  // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
  // Firefox with layout.scrollbar.side = 3 in about:config to test this.
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = offset$1;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = shift$1;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = flip$1;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = size$1;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = hide$1;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = arrow$1;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = limitShift$1;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

const empty = [];
function snapshot(value, skip_warning = false, no_tojson = false) {
  return clone(value, /* @__PURE__ */ new Map(), "", empty, null, no_tojson);
}
function clone(value, cloned, path, paths, original = null, no_tojson = false) {
  if (typeof value === "object" && value !== null) {
    var unwrapped = cloned.get(value);
    if (unwrapped !== void 0) return unwrapped;
    if (value instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(value)
    );
    if (value instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(value)
    );
    if (is_array(value)) {
      var copy = (
        /** @type {Snapshot<any>} */
        Array(value.length)
      );
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var i = 0; i < value.length; i += 1) {
        var element = value[i];
        if (i in value) {
          copy[i] = clone(element, cloned, path, paths, null, no_tojson);
        }
      }
      return copy;
    }
    if (get_prototype_of(value) === object_prototype) {
      copy = {};
      cloned.set(value, copy);
      if (original !== null) {
        cloned.set(original, copy);
      }
      for (var key in value) {
        copy[key] = clone(
          // @ts-expect-error
          value[key],
          cloned,
          path,
          paths,
          null,
          no_tojson
        );
      }
      return copy;
    }
    if (value instanceof Date) {
      return (
        /** @type {Snapshot<T>} */
        structuredClone(value)
      );
    }
    if (typeof /** @type {T & { toJSON?: any } } */
    value.toJSON === "function" && !no_tojson) {
      return clone(
        /** @type {T & { toJSON(): any } } */
        value.toJSON(),
        cloned,
        path,
        paths,
        // Associate the instance with the toJSON clone
        value
      );
    }
  }
  if (value instanceof EventTarget) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(value)
    );
  } catch (e) {
    return (
      /** @type {Snapshot<T>} */
      value
    );
  }
}
function Arrow_left($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "m12 19-7-7 7-7" }],
      ["path", { "d": "M19 12H5" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "arrow-left" },
      /**
       * @component @name ArrowLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIgMTktNy03IDctNyIgLz4KICA8cGF0aCBkPSJNMTkgMTJINSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-left
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Check($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
    Icon($$renderer2, spread_props([
      { name: "check" },
      /**
       * @component @name Check
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/check
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Chevron_down($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
    Icon($$renderer2, spread_props([
      { name: "chevron-down" },
      /**
       * @component @name ChevronDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNiA5IDYgNiA2LTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chevron-down
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Chevron_up($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "m18 15-6-6-6 6" }]];
    Icon($$renderer2, spread_props([
      { name: "chevron-up" },
      /**
       * @component @name ChevronUp
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTggMTUtNi02LTYgNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chevron-up
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Chevrons_up_down($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "m7 15 5 5 5-5" }],
      ["path", { "d": "m7 9 5-5 5 5" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "chevrons-up-down" },
      /**
       * @component @name ChevronsUpDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNyAxNSA1IDUgNS01IiAvPgogIDxwYXRoIGQ9Im03IDkgNS01IDUgNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chevrons-up-down
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Search($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    /**
     * @license @lucide/svelte v0.544.0 - ISC
     *
     * ISC License
     *
     * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
     *
     * Permission to use, copy, modify, and/or distribute this software for any
     * purpose with or without fee is hereby granted, provided that the above
     * copyright notice and this permission notice appear in all copies.
     *
     * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
     * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
     * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
     * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
     * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
     * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
     *
     * ---
     *
     * The MIT License (MIT) (for portions derived from Feather)
     *
     * Copyright (c) 2013-2023 Cole Bemis
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     *
     */
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["path", { "d": "m21 21-4.34-4.34" }],
      ["circle", { "cx": "11", "cy": "11", "r": "8" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "search" },
      /**
       * @component @name Search
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0IiAvPgogIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
const srOnlyStylesString = styleToString(srOnlyStyles);
function isFunction(value) {
  return typeof value === "function";
}
function get$1(value) {
  if (isFunction(value)) {
    return value();
  }
  return value;
}
class ElementSize {
  // no need to use `$state` here since we are using createSubscriber
  #size = { width: 0, height: 0 };
  #observed = false;
  #options;
  #node;
  #window;
  // we use a derived here to extract the width so that if the width doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #width = derived(() => {
    this.#subscribe()?.();
    return this.getSize().width;
  });
  // we use a derived here to extract the height so that if the height doesn't change we don't get a state update
  // which we would get if we would just use a getter since the version of the subscriber will be changing
  #height = derived(() => {
    this.#subscribe()?.();
    return this.getSize().height;
  });
  // we need to use a derived here because the class will be created before the node is bound to the ref
  #subscribe = derived(() => {
    const node$ = get$1(this.#node);
    if (!node$) return;
    return createSubscriber();
  });
  constructor(node, options = { box: "border-box" }) {
    this.#window = options.window ?? defaultWindow;
    this.#options = options;
    this.#node = node;
    this.#size = { width: 0, height: 0 };
  }
  calculateSize() {
    const element = get$1(this.#node);
    if (!element || !this.#window) {
      return;
    }
    const offsetWidth = element.offsetWidth;
    const offsetHeight = element.offsetHeight;
    if (this.#options.box === "border-box") {
      return { width: offsetWidth, height: offsetHeight };
    }
    const style = this.#window.getComputedStyle(element);
    const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const contentWidth = offsetWidth - paddingWidth - borderWidth;
    const contentHeight = offsetHeight - paddingHeight - borderHeight;
    return { width: contentWidth, height: contentHeight };
  }
  getSize() {
    return this.#observed ? this.#size : this.calculateSize() ?? this.#size;
  }
  get current() {
    this.#subscribe()?.();
    return this.getSize();
  }
  get width() {
    return this.#width();
  }
  get height() {
    return this.#height();
  }
}
class Previous {
  #previousCallback = () => void 0;
  #previous = derived(() => this.#previousCallback());
  constructor(getter, initialValue) {
    let actualPrevious = void 0;
    if (initialValue !== void 0) actualPrevious = initialValue;
    this.#previousCallback = () => {
      try {
        return actualPrevious;
      } finally {
        actualPrevious = getter();
      }
    };
  }
  get current() {
    return this.#previous();
  }
}
const defaultOptions = { afterMs: 1e4, onChange: noop };
function boxAutoReset(defaultValue, options) {
  const { afterMs, onChange, getWindow: getWindow2 } = { ...defaultOptions, ...options };
  let timeout = null;
  let value = defaultValue;
  function resetAfter() {
    return getWindow2().setTimeout(
      () => {
        value = defaultValue;
        onChange?.(defaultValue);
      },
      afterMs
    );
  }
  return boxWith(() => value, (v) => {
    value = v;
    onChange?.(v);
    if (timeout) getWindow2().clearTimeout(timeout);
    timeout = resetAfter();
  });
}
class DOMTypeahead {
  #opts;
  #search;
  #onMatch = derived(() => {
    if (this.#opts.onMatch) return this.#opts.onMatch;
    return (node) => node.focus();
  });
  #getCurrentItem = derived(() => {
    if (this.#opts.getCurrentItem) return this.#opts.getCurrentItem;
    return this.#opts.getActiveElement;
  });
  constructor(opts) {
    this.#opts = opts;
    this.#search = boxAutoReset("", { afterMs: 1e3, getWindow: opts.getWindow });
    this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this);
    this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(key, candidates) {
    if (!candidates.length) return;
    this.#search.current = this.#search.current + key;
    const currentItem = this.#getCurrentItem()();
    const currentMatch = candidates.find((item) => item === currentItem)?.textContent?.trim() ?? "";
    const values = candidates.map((item) => item.textContent?.trim() ?? "");
    const nextMatch = getNextMatch(values, this.#search.current, currentMatch);
    const newItem = candidates.find((item) => item.textContent?.trim() === nextMatch);
    if (newItem) this.#onMatch()(newItem);
    return newItem;
  }
  resetTypeahead() {
    this.#search.current = "";
  }
  get search() {
    return this.#search.current;
  }
}
function Hidden_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = void 0, $$slots, $$events, ...restProps } = $$props;
    const mergedProps = mergeProps(restProps, {
      "aria-hidden": "true",
      tabindex: -1,
      style: srOnlyStylesString
    });
    if (mergedProps.type === "checkbox") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<input${attributes({ ...mergedProps, value }, void 0, void 0, void 0, 4)}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<input${attributes({ value, ...mergedProps }, void 0, void 0, void 0, 4)}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { value });
  });
}
function get(valueOrGetValue) {
  return typeof valueOrGetValue === "function" ? valueOrGetValue() : valueOrGetValue;
}
function getDPR(element) {
  if (typeof window === "undefined") return 1;
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function getFloatingContentCSSVars(name) {
  return {
    [`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
    [`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
    [`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
    [`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
    [`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`
  };
}
function useFloating(options) {
  const openOption = get(options.open) ?? true;
  const middlewareOption = get(options.middleware);
  const transformOption = get(options.transform) ?? true;
  const placementOption = get(options.placement) ?? "bottom";
  const strategyOption = get(options.strategy) ?? "absolute";
  const sideOffsetOption = get(options.sideOffset) ?? 0;
  const alignOffsetOption = get(options.alignOffset) ?? 0;
  const reference = options.reference;
  let x = 0;
  let y = 0;
  const floating = simpleBox(null);
  let strategy = strategyOption;
  let placement = placementOption;
  let middlewareData = {};
  let isPositioned = false;
  const floatingStyles = (() => {
    const xVal = floating.current ? roundByDPR(floating.current, x) : x;
    const yVal = floating.current ? roundByDPR(floating.current, y) : y;
    if (transformOption) {
      return {
        position: strategy,
        left: "0",
        top: "0",
        transform: `translate(${xVal}px, ${yVal}px)`,
        ...floating.current && getDPR(floating.current) >= 1.5 && { willChange: "transform" }
      };
    }
    return { position: strategy, left: `${xVal}px`, top: `${yVal}px` };
  })();
  function update() {
    if (reference.current === null || floating.current === null) return;
    computePosition(reference.current, floating.current, {
      middleware: middlewareOption,
      placement: placementOption,
      strategy: strategyOption
    }).then((position) => {
      if (!openOption && x !== 0 && y !== 0) {
        const maxExpectedOffset = Math.max(Math.abs(sideOffsetOption), Math.abs(alignOffsetOption), 15);
        if (position.x <= maxExpectedOffset && position.y <= maxExpectedOffset) return;
      }
      x = position.x;
      y = position.y;
      strategy = position.strategy;
      placement = position.placement;
      middlewareData = position.middlewareData;
      isPositioned = true;
    });
  }
  return {
    floating,
    reference,
    get strategy() {
      return strategy;
    },
    get placement() {
      return placement;
    },
    get middlewareData() {
      return middlewareData;
    },
    get isPositioned() {
      return isPositioned;
    },
    get floatingStyles() {
      return floatingStyles;
    },
    get update() {
      return update;
    }
  };
}
const OPPOSITE_SIDE = { top: "bottom", right: "left", bottom: "top", left: "right" };
const FloatingRootContext = new Context("Floating.Root");
const FloatingContentContext = new Context("Floating.Content");
const FloatingTooltipRootContext = new Context("Floating.Root");
class FloatingRootState {
  static create(tooltip = false) {
    return tooltip ? FloatingTooltipRootContext.set(new FloatingRootState()) : FloatingRootContext.set(new FloatingRootState());
  }
  anchorNode = simpleBox(null);
  customAnchorNode = simpleBox(null);
  triggerNode = simpleBox(null);
  constructor() {
  }
}
class FloatingContentState {
  static create(opts, tooltip = false) {
    return tooltip ? FloatingContentContext.set(new FloatingContentState(opts, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new FloatingContentState(opts, FloatingRootContext.get()));
  }
  opts;
  root;
  // nodes
  contentRef = simpleBox(null);
  wrapperRef = simpleBox(null);
  arrowRef = simpleBox(null);
  contentAttachment = attachRef(this.contentRef);
  wrapperAttachment = attachRef(this.wrapperRef);
  arrowAttachment = attachRef(this.arrowRef);
  // ids
  arrowId = simpleBox(useId());
  #transformedStyle = derived(() => {
    if (typeof this.opts.style === "string") return cssToStyleObj(this.opts.style);
    if (!this.opts.style) return {};
  });
  #updatePositionStrategy = void 0;
  #arrowSize = new ElementSize(() => this.arrowRef.current ?? void 0);
  #arrowWidth = derived(() => this.#arrowSize?.width ?? 0);
  #arrowHeight = derived(() => this.#arrowSize?.height ?? 0);
  #desiredPlacement = derived(() => this.opts.side?.current + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : ""));
  #boundary = derived(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]);
  #hasExplicitBoundaries = derived(() => this.#boundary().length > 0);
  get hasExplicitBoundaries() {
    return this.#hasExplicitBoundaries();
  }
  set hasExplicitBoundaries($$value) {
    return this.#hasExplicitBoundaries($$value);
  }
  #detectOverflowOptions = derived(() => ({
    padding: this.opts.collisionPadding.current,
    boundary: this.#boundary().filter(isNotNull),
    altBoundary: this.hasExplicitBoundaries
  }));
  get detectOverflowOptions() {
    return this.#detectOverflowOptions();
  }
  set detectOverflowOptions($$value) {
    return this.#detectOverflowOptions($$value);
  }
  #availableWidth = void 0;
  #availableHeight = void 0;
  #anchorWidth = void 0;
  #anchorHeight = void 0;
  #middleware = derived(() => [
    offset({
      mainAxis: this.opts.sideOffset.current + this.#arrowHeight(),
      alignmentAxis: this.opts.alignOffset.current
    }),
    this.opts.avoidCollisions.current && shift({
      mainAxis: true,
      crossAxis: false,
      limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
      ...this.detectOverflowOptions
    }),
    this.opts.avoidCollisions.current && flip({ ...this.detectOverflowOptions }),
    size({
      ...this.detectOverflowOptions,
      apply: ({ rects, availableWidth, availableHeight }) => {
        const { width: anchorWidth, height: anchorHeight } = rects.reference;
        this.#availableWidth = availableWidth;
        this.#availableHeight = availableHeight;
        this.#anchorWidth = anchorWidth;
        this.#anchorHeight = anchorHeight;
      }
    }),
    this.arrowRef.current && arrow({
      element: this.arrowRef.current,
      padding: this.opts.arrowPadding.current
    }),
    transformOrigin({
      arrowWidth: this.#arrowWidth(),
      arrowHeight: this.#arrowHeight()
    }),
    this.opts.hideWhenDetached.current && hide({ strategy: "referenceHidden", ...this.detectOverflowOptions })
  ].filter(Boolean));
  get middleware() {
    return this.#middleware();
  }
  set middleware($$value) {
    return this.#middleware($$value);
  }
  floating;
  #placedSide = derived(() => getSideFromPlacement(this.floating.placement));
  get placedSide() {
    return this.#placedSide();
  }
  set placedSide($$value) {
    return this.#placedSide($$value);
  }
  #placedAlign = derived(() => getAlignFromPlacement(this.floating.placement));
  get placedAlign() {
    return this.#placedAlign();
  }
  set placedAlign($$value) {
    return this.#placedAlign($$value);
  }
  #arrowX = derived(() => this.floating.middlewareData.arrow?.x ?? 0);
  get arrowX() {
    return this.#arrowX();
  }
  set arrowX($$value) {
    return this.#arrowX($$value);
  }
  #arrowY = derived(() => this.floating.middlewareData.arrow?.y ?? 0);
  get arrowY() {
    return this.#arrowY();
  }
  set arrowY($$value) {
    return this.#arrowY($$value);
  }
  #cannotCenterArrow = derived(() => this.floating.middlewareData.arrow?.centerOffset !== 0);
  get cannotCenterArrow() {
    return this.#cannotCenterArrow();
  }
  set cannotCenterArrow($$value) {
    return this.#cannotCenterArrow($$value);
  }
  contentZIndex;
  #arrowBaseSide = derived(() => OPPOSITE_SIDE[this.placedSide]);
  get arrowBaseSide() {
    return this.#arrowBaseSide();
  }
  set arrowBaseSide($$value) {
    return this.#arrowBaseSide($$value);
  }
  #wrapperProps = derived(() => ({
    id: this.opts.wrapperId.current,
    "data-bits-floating-content-wrapper": "",
    style: {
      ...this.floating.floatingStyles,
      transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
      minWidth: "max-content",
      zIndex: this.contentZIndex,
      "--bits-floating-transform-origin": `${this.floating.middlewareData.transformOrigin?.x} ${this.floating.middlewareData.transformOrigin?.y}`,
      "--bits-floating-available-width": `${this.#availableWidth}px`,
      "--bits-floating-available-height": `${this.#availableHeight}px`,
      "--bits-floating-anchor-width": `${this.#anchorWidth}px`,
      "--bits-floating-anchor-height": `${this.#anchorHeight}px`,
      ...this.floating.middlewareData.hide?.referenceHidden && { visibility: "hidden", "pointer-events": "none" },
      ...this.#transformedStyle()
    },
    dir: this.opts.dir.current,
    ...this.wrapperAttachment
  }));
  get wrapperProps() {
    return this.#wrapperProps();
  }
  set wrapperProps($$value) {
    return this.#wrapperProps($$value);
  }
  #props = derived(() => ({
    "data-side": this.placedSide,
    "data-align": this.placedAlign,
    style: styleToString({ ...this.#transformedStyle() }),
    ...this.contentAttachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  #arrowStyle = derived(() => ({
    position: "absolute",
    left: this.arrowX ? `${this.arrowX}px` : void 0,
    top: this.arrowY ? `${this.arrowY}px` : void 0,
    [this.arrowBaseSide]: 0,
    "transform-origin": { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[this.placedSide],
    transform: {
      top: "translateY(100%)",
      right: "translateY(50%) rotate(90deg) translateX(-50%)",
      bottom: "rotate(180deg)",
      left: "translateY(50%) rotate(-90deg) translateX(50%)"
    }[this.placedSide],
    visibility: this.cannotCenterArrow ? "hidden" : void 0
  }));
  get arrowStyle() {
    return this.#arrowStyle();
  }
  set arrowStyle($$value) {
    return this.#arrowStyle($$value);
  }
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    if (opts.customAnchor) {
      this.root.customAnchorNode.current = opts.customAnchor.current;
    }
    watch(() => opts.customAnchor.current, (customAnchor) => {
      this.root.customAnchorNode.current = customAnchor;
    });
    this.floating = useFloating({
      strategy: () => this.opts.strategy.current,
      placement: () => this.#desiredPlacement(),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    });
    watch(() => this.contentRef.current, (contentNode) => {
      if (!contentNode) return;
      const win = getWindow$1(contentNode);
      this.contentZIndex = win.getComputedStyle(contentNode).zIndex;
    });
  }
}
class FloatingAnchorState {
  static create(opts, tooltip = false) {
    return tooltip ? new FloatingAnchorState(opts, FloatingTooltipRootContext.get()) : new FloatingAnchorState(opts, FloatingRootContext.get());
  }
  opts;
  root;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    if (opts.virtualEl && opts.virtualEl.current) {
      root.triggerNode = boxFrom(opts.virtualEl.current);
    } else {
      root.triggerNode = opts.ref;
    }
  }
}
function transformOrigin(options) {
  return {
    name: "transformOrigin",
    options,
    fn(data) {
      const { placement, rects, middlewareData } = data;
      const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
      const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
      const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
      let x = "";
      let y = "";
      if (placedSide === "bottom") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x = `${-arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x = `${rects.floating.width + arrowHeight}px`;
        y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return { data: { x, y } };
    }
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
function getSideFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[0];
}
function getAlignFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[1];
}
function Floating_layer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, tooltip = false } = $$props;
    FloatingRootState.create(tooltip);
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
class DataTypeahead {
  #opts;
  #candidateValues = derived(() => this.#opts.candidateValues());
  #search;
  constructor(opts) {
    this.#opts = opts;
    this.#search = boxAutoReset("", { afterMs: 1e3, getWindow: this.#opts.getWindow });
    this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this);
    this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(key) {
    if (!this.#opts.enabled() || !this.#candidateValues().length) return;
    this.#search.current = this.#search.current + key;
    const currentItem = this.#opts.getCurrentItem();
    const currentMatch = this.#candidateValues().find((item) => item === currentItem) ?? "";
    const values = this.#candidateValues().map((item) => item ?? "");
    const nextMatch = getNextMatch(values, this.#search.current, currentMatch);
    const newItem = this.#candidateValues().find((item) => item === nextMatch);
    if (newItem) {
      this.#opts.onMatch(newItem);
    }
    return newItem;
  }
  resetTypeahead() {
    this.#search.current = "";
  }
}
const FIRST_KEYS = [ARROW_DOWN, PAGE_UP, HOME];
const LAST_KEYS = [ARROW_UP, PAGE_DOWN, END];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
const selectAttrs = createBitsAttrs({
  component: "select",
  parts: [
    "trigger",
    "content",
    "item",
    "viewport",
    "scroll-up-button",
    "scroll-down-button",
    "group",
    "group-label",
    "separator",
    "arrow",
    "input",
    "content-wrapper",
    "item-text",
    "value"
  ]
});
const SelectRootContext = new Context("Select.Root | Combobox.Root");
const SelectContentContext = new Context("Select.Content | Combobox.Content");
class SelectBaseRootState {
  opts;
  touchedInput = false;
  inputNode = null;
  contentNode = null;
  contentPresence;
  viewportNode = null;
  triggerNode = null;
  valueId = "";
  highlightedNode = null;
  #highlightedValue = derived(() => {
    if (!this.highlightedNode) return null;
    return this.highlightedNode.getAttribute("data-value");
  });
  get highlightedValue() {
    return this.#highlightedValue();
  }
  set highlightedValue($$value) {
    return this.#highlightedValue($$value);
  }
  #highlightedId = derived(() => {
    if (!this.highlightedNode) return void 0;
    return this.highlightedNode.id;
  });
  get highlightedId() {
    return this.#highlightedId();
  }
  set highlightedId($$value) {
    return this.#highlightedId($$value);
  }
  #highlightedLabel = derived(() => {
    if (!this.highlightedNode) return null;
    return this.highlightedNode.getAttribute("data-label");
  });
  get highlightedLabel() {
    return this.#highlightedLabel();
  }
  set highlightedLabel($$value) {
    return this.#highlightedLabel($$value);
  }
  isUsingKeyboard = false;
  isCombobox = false;
  domContext = new DOMContext(() => null);
  constructor(opts) {
    this.opts = opts;
    this.isCombobox = opts.isCombobox;
    this.contentPresence = new PresenceManager({
      ref: boxWith(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
  }
  setHighlightedNode(node, initial = false) {
    this.highlightedNode = node;
    if (node && (this.isUsingKeyboard || initial)) {
      node.scrollIntoView({ block: this.opts.scrollAlignment.current });
    }
  }
  getCandidateNodes() {
    const node = this.contentNode;
    if (!node) return [];
    return Array.from(node.querySelectorAll(`[${this.getBitsAttr("item")}]:not([data-disabled])`));
  }
  setHighlightedToFirstCandidate(initial = false) {
    this.setHighlightedNode(null);
    let nodes = this.getCandidateNodes();
    if (!nodes.length) return;
    if (this.viewportNode) {
      const viewportRect = this.viewportNode.getBoundingClientRect();
      nodes = nodes.filter((node) => {
        if (!this.viewportNode) return false;
        const nodeRect = node.getBoundingClientRect();
        const isNodeFullyVisible = nodeRect.right < viewportRect.right && nodeRect.left > viewportRect.left && nodeRect.bottom < viewportRect.bottom && nodeRect.top > viewportRect.top;
        return isNodeFullyVisible;
      });
    }
    this.setHighlightedNode(nodes[0], initial);
  }
  getNodeByValue(value) {
    const candidateNodes = this.getCandidateNodes();
    return candidateNodes.find((node) => node.dataset.value === value) ?? null;
  }
  setOpen(open) {
    this.opts.open.current = open;
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  handleOpen() {
    this.setOpen(true);
  }
  handleClose() {
    this.setHighlightedNode(null);
    this.setOpen(false);
  }
  toggleMenu() {
    this.toggleOpen();
  }
  getBitsAttr = (part) => {
    return selectAttrs.getAttr(part, this.isCombobox ? "combobox" : void 0);
  };
}
class SelectSingleRootState extends SelectBaseRootState {
  opts;
  isMulti = false;
  #hasValue = derived(() => this.opts.value.current !== "");
  get hasValue() {
    return this.#hasValue();
  }
  set hasValue($$value) {
    return this.#hasValue($$value);
  }
  #currentLabel = derived(() => {
    if (!this.opts.items.current.length) return "";
    return this.opts.items.current.find((item) => item.value === this.opts.value.current)?.label ?? "";
  });
  get currentLabel() {
    return this.#currentLabel();
  }
  set currentLabel($$value) {
    return this.#currentLabel($$value);
  }
  #candidateLabels = derived(() => {
    if (!this.opts.items.current.length) return [];
    const filteredItems = this.opts.items.current.filter((item) => !item.disabled);
    return filteredItems.map((item) => item.label);
  });
  get candidateLabels() {
    return this.#candidateLabels();
  }
  set candidateLabels($$value) {
    return this.#candidateLabels($$value);
  }
  #dataTypeaheadEnabled = derived(() => {
    if (this.isMulti) return false;
    if (this.opts.items.current.length === 0) return false;
    return true;
  });
  get dataTypeaheadEnabled() {
    return this.#dataTypeaheadEnabled();
  }
  set dataTypeaheadEnabled($$value) {
    return this.#dataTypeaheadEnabled($$value);
  }
  constructor(opts) {
    super(opts);
    this.opts = opts;
    watch(() => this.opts.open.current, () => {
      if (!this.opts.open.current) return;
      this.setInitialHighlightedNode();
    });
  }
  includesItem(itemValue) {
    return this.opts.value.current === itemValue;
  }
  toggleItem(itemValue, itemLabel = itemValue) {
    const newValue = this.includesItem(itemValue) ? "" : itemValue;
    this.opts.value.current = newValue;
    if (newValue !== "") {
      this.opts.inputValue.current = itemLabel;
    }
  }
  setInitialHighlightedNode() {
    afterTick(() => {
      if (this.highlightedNode && this.domContext.getDocument().contains(this.highlightedNode)) return;
      if (this.opts.value.current !== "") {
        const node = this.getNodeByValue(this.opts.value.current);
        if (node) {
          this.setHighlightedNode(node, true);
          return;
        }
      }
      this.setHighlightedToFirstCandidate(true);
    });
  }
}
class SelectMultipleRootState extends SelectBaseRootState {
  opts;
  isMulti = true;
  #hasValue = derived(() => this.opts.value.current.length > 0);
  get hasValue() {
    return this.#hasValue();
  }
  set hasValue($$value) {
    return this.#hasValue($$value);
  }
  constructor(opts) {
    super(opts);
    this.opts = opts;
    watch(() => this.opts.open.current, () => {
      if (!this.opts.open.current) return;
      this.setInitialHighlightedNode();
    });
  }
  includesItem(itemValue) {
    return this.opts.value.current.includes(itemValue);
  }
  toggleItem(itemValue, itemLabel = itemValue) {
    if (this.includesItem(itemValue)) {
      this.opts.value.current = this.opts.value.current.filter((v) => v !== itemValue);
    } else {
      this.opts.value.current = [...this.opts.value.current, itemValue];
    }
    this.opts.inputValue.current = itemLabel;
  }
  setInitialHighlightedNode() {
    afterTick(() => {
      if (!this.domContext) return;
      if (this.highlightedNode && this.domContext.getDocument().contains(this.highlightedNode)) return;
      if (this.opts.value.current.length && this.opts.value.current[0] !== "") {
        const node = this.getNodeByValue(this.opts.value.current[0]);
        if (node) {
          this.setHighlightedNode(node, true);
          return;
        }
      }
      this.setHighlightedToFirstCandidate(true);
    });
  }
}
class SelectRootState {
  static create(props) {
    const { type, ...rest } = props;
    const rootState = type === "single" ? new SelectSingleRootState(rest) : new SelectMultipleRootState(rest);
    return SelectRootContext.set(rootState);
  }
}
class SelectTriggerState {
  static create(opts) {
    return new SelectTriggerState(opts, SelectRootContext.get());
  }
  opts;
  root;
  attachment;
  #domTypeahead;
  #dataTypeahead;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref, (v) => this.root.triggerNode = v);
    this.root.domContext = new DOMContext(opts.ref);
    this.#domTypeahead = new DOMTypeahead({
      getCurrentItem: () => this.root.highlightedNode,
      onMatch: (node) => {
        this.root.setHighlightedNode(node);
      },
      getActiveElement: () => this.root.domContext.getActiveElement(),
      getWindow: () => this.root.domContext.getWindow()
    });
    this.#dataTypeahead = new DataTypeahead({
      getCurrentItem: () => {
        if (this.root.isMulti) return "";
        return this.root.currentLabel;
      },
      onMatch: (label) => {
        if (this.root.isMulti) return;
        if (!this.root.opts.items.current) return;
        const matchedItem = this.root.opts.items.current.find((item) => item.label === label);
        if (!matchedItem) return;
        this.root.opts.value.current = matchedItem.value;
      },
      enabled: () => !this.root.isMulti && this.root.dataTypeaheadEnabled,
      candidateValues: () => this.root.isMulti ? [] : this.root.candidateLabels,
      getWindow: () => this.root.domContext.getWindow()
    });
    this.onkeydown = this.onkeydown.bind(this);
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
    this.onclick = this.onclick.bind(this);
  }
  #handleOpen() {
    this.root.opts.open.current = true;
    this.#dataTypeahead.resetTypeahead();
    this.#domTypeahead.resetTypeahead();
  }
  #handlePointerOpen(_) {
    this.#handleOpen();
  }
  /**
   * Logic used to handle keyboard selection/deselection.
   *
   * If it returns true, it means the item was selected and whatever is calling
   * this function should return early
   *
   */
  #handleKeyboardSelection() {
    const isCurrentSelectedValue = this.root.highlightedValue === this.root.opts.value.current;
    if (!this.root.opts.allowDeselect.current && isCurrentSelectedValue && !this.root.isMulti) {
      this.root.handleClose();
      return true;
    }
    if (this.root.highlightedValue !== null) {
      this.root.toggleItem(this.root.highlightedValue, this.root.highlightedLabel ?? void 0);
    }
    if (!this.root.isMulti && !isCurrentSelectedValue) {
      this.root.handleClose();
      return true;
    }
    return false;
  }
  onkeydown(e) {
    this.root.isUsingKeyboard = true;
    if (e.key === ARROW_UP || e.key === ARROW_DOWN) e.preventDefault();
    if (!this.root.opts.open.current) {
      if (e.key === ENTER || e.key === SPACE || e.key === ARROW_DOWN || e.key === ARROW_UP) {
        e.preventDefault();
        this.root.handleOpen();
      } else if (!this.root.isMulti && this.root.dataTypeaheadEnabled) {
        this.#dataTypeahead.handleTypeaheadSearch(e.key);
        return;
      }
      if (this.root.hasValue) return;
      const candidateNodes2 = this.root.getCandidateNodes();
      if (!candidateNodes2.length) return;
      if (e.key === ARROW_DOWN) {
        const firstCandidate = candidateNodes2[0];
        this.root.setHighlightedNode(firstCandidate);
      } else if (e.key === ARROW_UP) {
        const lastCandidate = candidateNodes2[candidateNodes2.length - 1];
        this.root.setHighlightedNode(lastCandidate);
      }
      return;
    }
    if (e.key === TAB) {
      this.root.handleClose();
      return;
    }
    if ((e.key === ENTER || // if we're currently "typing ahead", we don't want to select the item
    // just yet as the item the user is trying to get to may have a space in it,
    // so we defer handling the close for this case until further down
    e.key === SPACE && this.#domTypeahead.search === "") && !e.isComposing) {
      e.preventDefault();
      const shouldReturn = this.#handleKeyboardSelection();
      if (shouldReturn) return;
    }
    if (e.key === ARROW_UP && e.altKey) {
      this.root.handleClose();
    }
    if (FIRST_LAST_KEYS.includes(e.key)) {
      e.preventDefault();
      const candidateNodes2 = this.root.getCandidateNodes();
      const currHighlightedNode = this.root.highlightedNode;
      const currIndex = currHighlightedNode ? candidateNodes2.indexOf(currHighlightedNode) : -1;
      const loop = this.root.opts.loop.current;
      let nextItem;
      if (e.key === ARROW_DOWN) {
        nextItem = next(candidateNodes2, currIndex, loop);
      } else if (e.key === ARROW_UP) {
        nextItem = prev(candidateNodes2, currIndex, loop);
      } else if (e.key === PAGE_DOWN) {
        nextItem = forward(candidateNodes2, currIndex, 10, loop);
      } else if (e.key === PAGE_UP) {
        nextItem = backward(candidateNodes2, currIndex, 10, loop);
      } else if (e.key === HOME) {
        nextItem = candidateNodes2[0];
      } else if (e.key === END) {
        nextItem = candidateNodes2[candidateNodes2.length - 1];
      }
      if (!nextItem) return;
      this.root.setHighlightedNode(nextItem);
      return;
    }
    const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
    const isCharacterKey = e.key.length === 1;
    const isSpaceKey = e.key === SPACE;
    const candidateNodes = this.root.getCandidateNodes();
    if (e.key === TAB) return;
    if (!isModifierKey && (isCharacterKey || isSpaceKey)) {
      const matchedNode = this.#domTypeahead.handleTypeaheadSearch(e.key, candidateNodes);
      if (!matchedNode && isSpaceKey) {
        e.preventDefault();
        this.#handleKeyboardSelection();
      }
      return;
    }
    if (!this.root.highlightedNode) {
      this.root.setHighlightedToFirstCandidate();
    }
  }
  onclick(e) {
    const currTarget = e.currentTarget;
    currTarget.focus();
  }
  onpointerdown(e) {
    if (this.root.opts.disabled.current) return;
    if (e.pointerType === "touch") return e.preventDefault();
    const target = e.target;
    if (target?.hasPointerCapture(e.pointerId)) {
      target?.releasePointerCapture(e.pointerId);
    }
    if (e.button === 0 && e.ctrlKey === false) {
      if (this.root.opts.open.current === false) {
        this.#handlePointerOpen(e);
      } else {
        this.root.handleClose();
      }
    }
  }
  onpointerup(e) {
    if (this.root.opts.disabled.current) return;
    e.preventDefault();
    if (e.pointerType === "touch") {
      if (this.root.opts.open.current === false) {
        this.#handlePointerOpen(e);
      } else {
        this.root.handleClose();
      }
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    disabled: this.root.opts.disabled.current ? true : void 0,
    "aria-haspopup": "listbox",
    "aria-expanded": boolToStr(this.root.opts.open.current),
    "aria-activedescendant": this.root.highlightedId,
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    "data-disabled": boolToEmptyStrOrUndef(this.root.opts.disabled.current),
    "data-placeholder": this.root.hasValue ? void 0 : "",
    [this.root.getBitsAttr("trigger")]: "",
    onpointerdown: this.onpointerdown,
    onkeydown: this.onkeydown,
    onclick: this.onclick,
    onpointerup: this.onpointerup,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SelectContentState {
  static create(opts) {
    return SelectContentContext.set(new SelectContentState(opts, SelectRootContext.get()));
  }
  opts;
  root;
  attachment;
  isPositioned = false;
  domContext;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref, (v) => this.root.contentNode = v);
    this.domContext = new DOMContext(this.opts.ref);
    if (this.root.domContext === null) {
      this.root.domContext = this.domContext;
    }
    watch(() => this.root.opts.open.current, () => {
      if (this.root.opts.open.current) return;
      this.isPositioned = false;
    });
    this.onpointermove = this.onpointermove.bind(this);
  }
  onpointermove(_) {
    this.root.isUsingKeyboard = false;
  }
  #styles = derived(() => {
    return getFloatingContentCSSVars(this.root.isCombobox ? "combobox" : "select");
  });
  onInteractOutside = (e) => {
    if (e.target === this.root.triggerNode || e.target === this.root.inputNode) {
      e.preventDefault();
      return;
    }
    this.opts.onInteractOutside.current(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  onEscapeKeydown = (e) => {
    this.opts.onEscapeKeydown.current(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  onOpenAutoFocus = (e) => {
    e.preventDefault();
  };
  onCloseAutoFocus = (e) => {
    e.preventDefault();
  };
  get shouldRender() {
    return this.root.contentPresence.shouldRender;
  }
  #snippetProps = derived(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-multiselectable": this.root.isMulti ? "true" : void 0,
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    [this.root.getBitsAttr("content")]: "",
    style: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      boxSizing: "border-box",
      pointerEvents: "auto",
      ...this.#styles()
    },
    onpointermove: this.onpointermove,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  popperProps = {
    onInteractOutside: this.onInteractOutside,
    onEscapeKeydown: this.onEscapeKeydown,
    onOpenAutoFocus: this.onOpenAutoFocus,
    onCloseAutoFocus: this.onCloseAutoFocus,
    trapFocus: false,
    loop: false,
    onPlaced: () => {
      if (this.root.opts.open.current) {
        this.isPositioned = true;
      }
    }
  };
}
class SelectItemState {
  static create(opts) {
    return new SelectItemState(opts, SelectRootContext.get());
  }
  opts;
  root;
  attachment;
  #isSelected = derived(() => this.root.includesItem(this.opts.value.current));
  get isSelected() {
    return this.#isSelected();
  }
  set isSelected($$value) {
    return this.#isSelected($$value);
  }
  #isHighlighted = derived(() => this.root.highlightedValue === this.opts.value.current);
  get isHighlighted() {
    return this.#isHighlighted();
  }
  set isHighlighted($$value) {
    return this.#isHighlighted($$value);
  }
  prevHighlighted = new Previous(() => this.isHighlighted);
  mounted = false;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
    watch([() => this.isHighlighted, () => this.prevHighlighted.current], () => {
      if (this.isHighlighted) {
        this.opts.onHighlight.current();
      } else if (this.prevHighlighted.current) {
        this.opts.onUnhighlight.current();
      }
    });
    watch(() => this.mounted, () => {
      if (!this.mounted) return;
      this.root.setInitialHighlightedNode();
    });
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
    this.onpointermove = this.onpointermove.bind(this);
  }
  handleSelect() {
    if (this.opts.disabled.current) return;
    const isCurrentSelectedValue = this.opts.value.current === this.root.opts.value.current;
    if (!this.root.opts.allowDeselect.current && isCurrentSelectedValue && !this.root.isMulti) {
      this.root.handleClose();
      return;
    }
    this.root.toggleItem(this.opts.value.current, this.opts.label.current);
    if (!this.root.isMulti && !isCurrentSelectedValue) {
      this.root.handleClose();
    }
  }
  #snippetProps = derived(() => ({ selected: this.isSelected, highlighted: this.isHighlighted }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  onpointerdown(e) {
    e.preventDefault();
  }
  /**
   * Using `pointerup` instead of `click` allows power users to pointerdown
   * the trigger, then release pointerup on an item to select it vs having to do
   * multiple clicks.
   */
  onpointerup(e) {
    if (e.defaultPrevented || !this.opts.ref.current) return;
    if (e.pointerType === "touch" && !isIOS) {
      on(
        this.opts.ref.current,
        "click",
        () => {
          this.handleSelect();
          this.root.setHighlightedNode(this.opts.ref.current);
        },
        { once: true }
      );
      return;
    }
    e.preventDefault();
    this.handleSelect();
    if (e.pointerType === "touch") {
      this.root.setHighlightedNode(this.opts.ref.current);
    }
  }
  onpointermove(e) {
    if (e.pointerType === "touch") return;
    if (this.root.highlightedNode !== this.opts.ref.current) {
      this.root.setHighlightedNode(this.opts.ref.current);
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "option",
    "aria-selected": this.root.includesItem(this.opts.value.current) ? "true" : void 0,
    "data-value": this.opts.value.current,
    "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
    "data-highlighted": this.root.highlightedValue === this.opts.value.current && !this.opts.disabled.current ? "" : void 0,
    "data-selected": this.root.includesItem(this.opts.value.current) ? "" : void 0,
    "data-label": this.opts.label.current,
    [this.root.getBitsAttr("item")]: "",
    onpointermove: this.onpointermove,
    onpointerdown: this.onpointerdown,
    onpointerup: this.onpointerup,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SelectHiddenInputState {
  static create(opts) {
    return new SelectHiddenInputState(opts, SelectRootContext.get());
  }
  opts;
  root;
  #shouldRender = derived(() => this.root.opts.name.current !== "");
  get shouldRender() {
    return this.#shouldRender();
  }
  set shouldRender($$value) {
    return this.#shouldRender($$value);
  }
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.onfocus = this.onfocus.bind(this);
  }
  onfocus(e) {
    e.preventDefault();
    if (!this.root.isCombobox) {
      this.root.triggerNode?.focus();
    } else {
      this.root.inputNode?.focus();
    }
  }
  #props = derived(() => ({
    disabled: boolToTrueOrUndef(this.root.opts.disabled.current),
    required: boolToTrueOrUndef(this.root.opts.required.current),
    name: this.root.opts.name.current,
    value: this.opts.value.current,
    onfocus: this.onfocus
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SelectViewportState {
  static create(opts) {
    return new SelectViewportState(opts, SelectContentContext.get());
  }
  opts;
  content;
  root;
  attachment;
  prevScrollTop = 0;
  constructor(opts, content) {
    this.opts = opts;
    this.content = content;
    this.root = content.root;
    this.attachment = attachRef(opts.ref, (v) => {
      this.root.viewportNode = v;
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "presentation",
    [this.root.getBitsAttr("viewport")]: "",
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto"
    },
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SelectScrollButtonImplState {
  opts;
  content;
  root;
  attachment;
  autoScrollTimer = null;
  userScrollTimer = -1;
  isUserScrolling = false;
  onAutoScroll = noop;
  mounted = false;
  constructor(opts, content) {
    this.opts = opts;
    this.content = content;
    this.root = content.root;
    this.attachment = attachRef(opts.ref);
    watch([() => this.mounted], () => {
      if (!this.mounted) {
        this.isUserScrolling = false;
        return;
      }
      if (this.isUserScrolling) return;
    });
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointermove = this.onpointermove.bind(this);
    this.onpointerleave = this.onpointerleave.bind(this);
  }
  handleUserScroll() {
    this.content.domContext.clearTimeout(this.userScrollTimer);
    this.isUserScrolling = true;
    this.userScrollTimer = this.content.domContext.setTimeout(
      () => {
        this.isUserScrolling = false;
      },
      200
    );
  }
  clearAutoScrollInterval() {
    if (this.autoScrollTimer === null) return;
    this.content.domContext.clearTimeout(this.autoScrollTimer);
    this.autoScrollTimer = null;
  }
  onpointerdown(_) {
    if (this.autoScrollTimer !== null) return;
    const autoScroll = (tick2) => {
      this.onAutoScroll();
      this.autoScrollTimer = this.content.domContext.setTimeout(() => autoScroll(tick2 + 1), this.opts.delay.current(tick2));
    };
    this.autoScrollTimer = this.content.domContext.setTimeout(() => autoScroll(1), this.opts.delay.current(0));
  }
  onpointermove(e) {
    this.onpointerdown(e);
  }
  onpointerleave(_) {
    this.clearAutoScrollInterval();
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "aria-hidden": boolToStrTrueOrUndef(true),
    style: { flexShrink: 0 },
    onpointerdown: this.onpointerdown,
    onpointermove: this.onpointermove,
    onpointerleave: this.onpointerleave,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SelectScrollDownButtonState {
  static create(opts) {
    return new SelectScrollDownButtonState(new SelectScrollButtonImplState(opts, SelectContentContext.get()));
  }
  scrollButtonState;
  content;
  root;
  canScrollDown = false;
  scrollIntoViewTimer = null;
  constructor(scrollButtonState) {
    this.scrollButtonState = scrollButtonState;
    this.content = scrollButtonState.content;
    this.root = scrollButtonState.root;
    this.scrollButtonState.onAutoScroll = this.handleAutoScroll;
    watch(
      [
        () => this.root.viewportNode,
        () => this.content.isPositioned
      ],
      () => {
        if (!this.root.viewportNode || !this.content.isPositioned) return;
        this.handleScroll(true);
        return on(this.root.viewportNode, "scroll", () => this.handleScroll());
      }
    );
    watch(
      [
        () => this.root.opts.inputValue.current,
        () => this.root.viewportNode,
        () => this.content.isPositioned
      ],
      () => {
        if (!this.root.viewportNode || !this.content.isPositioned) return;
        this.handleScroll(true);
      }
    );
    watch(() => this.scrollButtonState.mounted, () => {
      if (!this.scrollButtonState.mounted) return;
      if (this.scrollIntoViewTimer) {
        clearTimeout(this.scrollIntoViewTimer);
      }
      this.scrollIntoViewTimer = afterSleep(5, () => {
        const activeItem = this.root.highlightedNode;
        activeItem?.scrollIntoView({ block: this.root.opts.scrollAlignment.current });
      });
    });
  }
  /**
   * @param manual - if true, it means the function was invoked manually outside of an event
   * listener, so we don't call `handleUserScroll` to prevent the auto scroll from kicking in.
   */
  handleScroll = (manual = false) => {
    if (!manual) {
      this.scrollButtonState.handleUserScroll();
    }
    if (!this.root.viewportNode) return;
    const maxScroll = this.root.viewportNode.scrollHeight - this.root.viewportNode.clientHeight;
    const paddingTop = Number.parseInt(getComputedStyle(this.root.viewportNode).paddingTop, 10);
    this.canScrollDown = Math.ceil(this.root.viewportNode.scrollTop) < maxScroll - paddingTop;
  };
  handleAutoScroll = () => {
    const viewport = this.root.viewportNode;
    const selectedItem = this.root.highlightedNode;
    if (!viewport || !selectedItem) return;
    viewport.scrollTop = viewport.scrollTop + selectedItem.offsetHeight;
  };
  #props = derived(() => ({
    ...this.scrollButtonState.props,
    [this.root.getBitsAttr("scroll-down-button")]: ""
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SelectScrollUpButtonState {
  static create(opts) {
    return new SelectScrollUpButtonState(new SelectScrollButtonImplState(opts, SelectContentContext.get()));
  }
  scrollButtonState;
  content;
  root;
  canScrollUp = false;
  constructor(scrollButtonState) {
    this.scrollButtonState = scrollButtonState;
    this.content = scrollButtonState.content;
    this.root = scrollButtonState.root;
    this.scrollButtonState.onAutoScroll = this.handleAutoScroll;
    watch(
      [
        () => this.root.viewportNode,
        () => this.content.isPositioned
      ],
      () => {
        if (!this.root.viewportNode || !this.content.isPositioned) return;
        this.handleScroll(true);
        return on(this.root.viewportNode, "scroll", () => this.handleScroll());
      }
    );
  }
  /**
   * @param manual - if true, it means the function was invoked manually outside of an event
   * listener, so we don't call `handleUserScroll` to prevent the auto scroll from kicking in.
   */
  handleScroll = (manual = false) => {
    if (!manual) {
      this.scrollButtonState.handleUserScroll();
    }
    if (!this.root.viewportNode) return;
    const paddingTop = Number.parseInt(getComputedStyle(this.root.viewportNode).paddingTop, 10);
    this.canScrollUp = this.root.viewportNode.scrollTop - paddingTop > 0.1;
  };
  handleAutoScroll = () => {
    if (!this.root.viewportNode || !this.root.highlightedNode) return;
    this.root.viewportNode.scrollTop = this.root.viewportNode.scrollTop - this.root.highlightedNode.offsetHeight;
  };
  #props = derived(() => ({
    ...this.scrollButtonState.props,
    [this.root.getBitsAttr("scroll-up-button")]: ""
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Select_hidden_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = void 0, autocomplete } = $$props;
    const hiddenInputState = SelectHiddenInputState.create({ value: boxWith(() => value) });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (hiddenInputState.shouldRender) {
        $$renderer3.push("<!--[-->");
        Hidden_input($$renderer3, spread_props([
          hiddenInputState.props,
          {
            autocomplete,
            get value() {
              return value;
            },
            set value($$value) {
              value = $$value;
              $$settled = false;
            }
          }
        ]));
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { value });
  });
}
function Floating_layer_anchor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { id, children, virtualEl, ref, tooltip = false } = $$props;
    FloatingAnchorState.create(
      {
        id: boxWith(() => id),
        virtualEl: boxWith(() => virtualEl),
        ref
      },
      tooltip
    );
    children?.($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
function Floating_layer_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      content,
      side = "bottom",
      sideOffset = 0,
      align = "center",
      alignOffset = 0,
      id,
      arrowPadding = 0,
      avoidCollisions = true,
      collisionBoundary = [],
      collisionPadding = 0,
      hideWhenDetached = false,
      onPlaced = () => {
      },
      sticky = "partial",
      updatePositionStrategy = "optimized",
      strategy = "fixed",
      dir = "ltr",
      style = {},
      wrapperId = useId(),
      customAnchor = null,
      enabled,
      tooltip = false
    } = $$props;
    const contentState = FloatingContentState.create(
      {
        side: boxWith(() => side),
        sideOffset: boxWith(() => sideOffset),
        align: boxWith(() => align),
        alignOffset: boxWith(() => alignOffset),
        id: boxWith(() => id),
        arrowPadding: boxWith(() => arrowPadding),
        avoidCollisions: boxWith(() => avoidCollisions),
        collisionBoundary: boxWith(() => collisionBoundary),
        collisionPadding: boxWith(() => collisionPadding),
        hideWhenDetached: boxWith(() => hideWhenDetached),
        onPlaced: boxWith(() => onPlaced),
        sticky: boxWith(() => sticky),
        updatePositionStrategy: boxWith(() => updatePositionStrategy),
        strategy: boxWith(() => strategy),
        dir: boxWith(() => dir),
        style: boxWith(() => style),
        enabled: boxWith(() => enabled),
        wrapperId: boxWith(() => wrapperId),
        customAnchor: boxWith(() => customAnchor)
      },
      tooltip
    );
    const mergedProps = mergeProps(contentState.wrapperProps, { style: { pointerEvents: "auto" } });
    content?.($$renderer2, { props: contentState.props, wrapperProps: mergedProps });
    $$renderer2.push(`<!---->`);
  });
}
function Floating_layer_content_static($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { content } = $$props;
    content?.($$renderer2, { props: {}, wrapperProps: {} });
    $$renderer2.push(`<!---->`);
  });
}
function Popper_content($$renderer, $$props) {
  let {
    content,
    isStatic = false,
    onPlaced,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  if (isStatic) {
    $$renderer.push("<!--[-->");
    Floating_layer_content_static($$renderer, { content });
  } else {
    $$renderer.push("<!--[!-->");
    Floating_layer_content($$renderer, spread_props([{ content, onPlaced }, restProps]));
  }
  $$renderer.push(`<!--]-->`);
}
function Popper_layer_inner($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      popper,
      onEscapeKeydown,
      escapeKeydownBehavior,
      preventOverflowTextSelection,
      id,
      onPointerDown,
      onPointerUp,
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      avoidCollisions,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      updatePositionStrategy,
      strategy,
      dir,
      preventScroll,
      wrapperId,
      style,
      onPlaced,
      onInteractOutside,
      onCloseAutoFocus,
      onOpenAutoFocus,
      onFocusOutside,
      interactOutsideBehavior = "close",
      loop,
      trapFocus = true,
      isValidEvent = () => false,
      customAnchor = null,
      isStatic = false,
      enabled,
      ref,
      tooltip = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    {
      let content = function($$renderer3, { props: floatingProps, wrapperProps }) {
        if (restProps.forceMount && enabled) {
          $$renderer3.push("<!--[-->");
          Scroll_lock($$renderer3, { preventScroll });
        } else {
          $$renderer3.push("<!--[!-->");
          if (!restProps.forceMount) {
            $$renderer3.push("<!--[-->");
            Scroll_lock($$renderer3, { preventScroll });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--> `);
        {
          let focusScope = function($$renderer4, { props: focusScopeProps }) {
            Escape_layer($$renderer4, {
              onEscapeKeydown,
              escapeKeydownBehavior,
              enabled,
              ref,
              children: ($$renderer5) => {
                {
                  let children = function($$renderer6, { props: dismissibleProps }) {
                    Text_selection_layer($$renderer6, {
                      id,
                      preventOverflowTextSelection,
                      onPointerDown,
                      onPointerUp,
                      enabled,
                      ref,
                      children: ($$renderer7) => {
                        popper?.($$renderer7, {
                          props: mergeProps(restProps, floatingProps, dismissibleProps, focusScopeProps, { style: { pointerEvents: "auto" } }),
                          wrapperProps
                        });
                        $$renderer7.push(`<!---->`);
                      }
                    });
                  };
                  Dismissible_layer($$renderer5, {
                    id,
                    onInteractOutside,
                    onFocusOutside,
                    interactOutsideBehavior,
                    isValidEvent,
                    enabled,
                    ref,
                    children
                  });
                }
              }
            });
          };
          Focus_scope($$renderer3, {
            onOpenAutoFocus,
            onCloseAutoFocus,
            loop,
            enabled,
            trapFocus,
            forceMount: restProps.forceMount,
            ref,
            focusScope
          });
        }
        $$renderer3.push(`<!---->`);
      };
      Popper_content($$renderer2, {
        isStatic,
        id,
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        avoidCollisions,
        collisionBoundary,
        collisionPadding,
        sticky,
        hideWhenDetached,
        updatePositionStrategy,
        strategy,
        dir,
        wrapperId,
        style,
        onPlaced,
        customAnchor,
        enabled,
        tooltip,
        content,
        $$slots: { content: true }
      });
    }
  });
}
function Popper_layer($$renderer, $$props) {
  let {
    popper,
    open,
    onEscapeKeydown,
    escapeKeydownBehavior,
    preventOverflowTextSelection,
    id,
    onPointerDown,
    onPointerUp,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    avoidCollisions,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    updatePositionStrategy,
    strategy,
    dir,
    preventScroll,
    wrapperId,
    style,
    onPlaced,
    onInteractOutside,
    onCloseAutoFocus,
    onOpenAutoFocus,
    onFocusOutside,
    interactOutsideBehavior = "close",
    loop,
    trapFocus = true,
    isValidEvent = () => false,
    customAnchor = null,
    isStatic = false,
    ref,
    shouldRender,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  if (shouldRender) {
    $$renderer.push("<!--[-->");
    Popper_layer_inner($$renderer, spread_props([
      {
        popper,
        onEscapeKeydown,
        escapeKeydownBehavior,
        preventOverflowTextSelection,
        id,
        onPointerDown,
        onPointerUp,
        side,
        sideOffset,
        align,
        alignOffset,
        arrowPadding,
        avoidCollisions,
        collisionBoundary,
        collisionPadding,
        sticky,
        hideWhenDetached,
        updatePositionStrategy,
        strategy,
        dir,
        preventScroll,
        wrapperId,
        style,
        onPlaced,
        customAnchor,
        isStatic,
        enabled: open,
        onInteractOutside,
        onCloseAutoFocus,
        onOpenAutoFocus,
        interactOutsideBehavior,
        loop,
        trapFocus,
        isValidEvent,
        onFocusOutside,
        forceMount: false,
        ref
      },
      restProps
    ]));
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]-->`);
}
function Popper_layer_force_mount($$renderer, $$props) {
  let {
    popper,
    onEscapeKeydown,
    escapeKeydownBehavior,
    preventOverflowTextSelection,
    id,
    onPointerDown,
    onPointerUp,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    avoidCollisions,
    collisionBoundary,
    collisionPadding,
    sticky,
    hideWhenDetached,
    updatePositionStrategy,
    strategy,
    dir,
    preventScroll,
    wrapperId,
    style,
    onPlaced,
    onInteractOutside,
    onCloseAutoFocus,
    onOpenAutoFocus,
    onFocusOutside,
    interactOutsideBehavior = "close",
    loop,
    trapFocus = true,
    isValidEvent = () => false,
    customAnchor = null,
    isStatic = false,
    enabled,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  Popper_layer_inner($$renderer, spread_props([
    {
      popper,
      onEscapeKeydown,
      escapeKeydownBehavior,
      preventOverflowTextSelection,
      id,
      onPointerDown,
      onPointerUp,
      side,
      sideOffset,
      align,
      alignOffset,
      arrowPadding,
      avoidCollisions,
      collisionBoundary,
      collisionPadding,
      sticky,
      hideWhenDetached,
      updatePositionStrategy,
      strategy,
      dir,
      preventScroll,
      wrapperId,
      style,
      onPlaced,
      customAnchor,
      isStatic,
      enabled,
      onInteractOutside,
      onCloseAutoFocus,
      onOpenAutoFocus,
      interactOutsideBehavior,
      loop,
      trapFocus,
      isValidEvent,
      onFocusOutside
    },
    restProps,
    { forceMount: true }
  ]));
}
function Select_content$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      forceMount = false,
      side = "bottom",
      onInteractOutside = noop,
      onEscapeKeydown = noop,
      children,
      child,
      preventScroll = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const contentState = SelectContentState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      onInteractOutside: boxWith(() => onInteractOutside),
      onEscapeKeydown: boxWith(() => onEscapeKeydown)
    });
    const mergedProps = mergeProps(restProps, contentState.props);
    if (forceMount) {
      $$renderer2.push("<!--[-->");
      {
        let popper = function($$renderer3, { props, wrapperProps }) {
          const finalProps = mergeProps(props, { style: contentState.props.style });
          if (child) {
            $$renderer3.push("<!--[-->");
            child($$renderer3, {
              props: finalProps,
              wrapperProps,
              ...contentState.snippetProps
            });
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
            children?.($$renderer3);
            $$renderer3.push(`<!----></div></div>`);
          }
          $$renderer3.push(`<!--]-->`);
        };
        Popper_layer_force_mount($$renderer2, spread_props([
          mergedProps,
          contentState.popperProps,
          {
            ref: contentState.opts.ref,
            side,
            enabled: contentState.root.opts.open.current,
            id,
            preventScroll,
            forceMount: true,
            shouldRender: contentState.shouldRender,
            popper,
            $$slots: { popper: true }
          }
        ]));
      }
    } else {
      $$renderer2.push("<!--[!-->");
      if (!forceMount) {
        $$renderer2.push("<!--[-->");
        {
          let popper = function($$renderer3, { props, wrapperProps }) {
            const finalProps = mergeProps(props, { style: contentState.props.style });
            if (child) {
              $$renderer3.push("<!--[-->");
              child($$renderer3, {
                props: finalProps,
                wrapperProps,
                ...contentState.snippetProps
              });
              $$renderer3.push(`<!---->`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
              children?.($$renderer3);
              $$renderer3.push(`<!----></div></div>`);
            }
            $$renderer3.push(`<!--]-->`);
          };
          Popper_layer($$renderer2, spread_props([
            mergedProps,
            contentState.popperProps,
            {
              ref: contentState.opts.ref,
              side,
              open: contentState.root.opts.open.current,
              id,
              preventScroll,
              forceMount: false,
              shouldRender: contentState.shouldRender,
              popper,
              $$slots: { popper: true }
            }
          ]));
        }
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Mounted($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { mounted = false, onMountedChange = noop } = $$props;
    bind_props($$props, { mounted });
  });
}
function Select_item$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      value,
      label = value,
      disabled = false,
      children,
      child,
      onHighlight = noop,
      onUnhighlight = noop,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const itemState = SelectItemState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      value: boxWith(() => value),
      disabled: boxWith(() => disabled),
      label: boxWith(() => label),
      onHighlight: boxWith(() => onHighlight),
      onUnhighlight: boxWith(() => onUnhighlight)
    });
    const mergedProps = mergeProps(restProps, itemState.props);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (child) {
        $$renderer3.push("<!--[-->");
        child($$renderer3, { props: mergedProps, ...itemState.snippetProps });
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div${attributes({ ...mergedProps })}>`);
        children?.($$renderer3, itemState.snippetProps);
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]--> `);
      Mounted($$renderer3, {
        get mounted() {
          return itemState.mounted;
        },
        set mounted($$value) {
          itemState.mounted = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Select_viewport($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      children,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const viewportState = SelectViewportState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, viewportState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Select_scroll_down_button$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      delay = () => 50,
      child,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const scrollButtonState = SelectScrollDownButtonState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      delay: boxWith(() => delay)
    });
    const mergedProps = mergeProps(restProps, scrollButtonState.props);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (scrollButtonState.canScrollDown) {
        $$renderer3.push("<!--[-->");
        Mounted($$renderer3, {
          get mounted() {
            return scrollButtonState.scrollButtonState.mounted;
          },
          set mounted($$value) {
            scrollButtonState.scrollButtonState.mounted = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> `);
        if (child) {
          $$renderer3.push("<!--[-->");
          child($$renderer3, { props: restProps });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div${attributes({ ...mergedProps })}>`);
          children?.($$renderer3);
          $$renderer3.push(`<!----></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Select_scroll_up_button$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      delay = () => 50,
      child,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const scrollButtonState = SelectScrollUpButtonState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      delay: boxWith(() => delay)
    });
    const mergedProps = mergeProps(restProps, scrollButtonState.props);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      if (scrollButtonState.canScrollUp) {
        $$renderer3.push("<!--[-->");
        Mounted($$renderer3, {
          get mounted() {
            return scrollButtonState.scrollButtonState.mounted;
          },
          set mounted($$value) {
            scrollButtonState.scrollButtonState.mounted = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> `);
        if (child) {
          $$renderer3.push("<!--[-->");
          child($$renderer3, { props: restProps });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div${attributes({ ...mergedProps })}>`);
          children?.($$renderer3);
          $$renderer3.push(`<!----></div>`);
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function findNextSibling(el, selector) {
  let sibling = el.nextElementSibling;
  while (sibling) {
    if (sibling.matches(selector))
      return sibling;
    sibling = sibling.nextElementSibling;
  }
}
function findPreviousSibling(el, selector) {
  let sibling = el.previousElementSibling;
  while (sibling) {
    if (sibling.matches(selector))
      return sibling;
    sibling = sibling.previousElementSibling;
  }
}
function cssEscape(value) {
  if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
    return CSS.escape(value);
  }
  const length = value.length;
  let index = -1;
  let codeUnit;
  let result = "";
  const firstCodeUnit = value.charCodeAt(0);
  if (length === 1 && firstCodeUnit === 45)
    return "\\" + value;
  while (++index < length) {
    codeUnit = value.charCodeAt(index);
    if (codeUnit === 0) {
      result += "�";
      continue;
    }
    if (
      // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is U+007F
      codeUnit >= 1 && codeUnit <= 31 || codeUnit === 127 || // If the character is the first character and is in the range [0-9] (U+0030 to U+0039)
      index === 0 && codeUnit >= 48 && codeUnit <= 57 || // If the character is the second character and is in the range [0-9] (U+0030 to U+0039)
      // and the first character is a `-` (U+002D)
      index === 1 && codeUnit >= 48 && codeUnit <= 57 && firstCodeUnit === 45
    ) {
      result += "\\" + codeUnit.toString(16) + " ";
      continue;
    }
    if (codeUnit >= 128 || codeUnit === 45 || codeUnit === 95 || codeUnit >= 48 && codeUnit <= 57 || codeUnit >= 65 && codeUnit <= 90 || codeUnit >= 97 && codeUnit <= 122) {
      result += value.charAt(index);
      continue;
    }
    result += "\\" + value.charAt(index);
  }
  return result;
}
const COMMAND_VALUE_ATTR = "data-value";
const commandAttrs = createBitsAttrs({
  component: "command",
  parts: [
    "root",
    "list",
    "input",
    "separator",
    "loading",
    "empty",
    "group",
    "group-items",
    "group-heading",
    "item",
    "viewport",
    "input-label"
  ]
});
const COMMAND_GROUP_SELECTOR = commandAttrs.selector("group");
const COMMAND_GROUP_ITEMS_SELECTOR = commandAttrs.selector("group-items");
const COMMAND_GROUP_HEADING_SELECTOR = commandAttrs.selector("group-heading");
const COMMAND_ITEM_SELECTOR = commandAttrs.selector("item");
const COMMAND_VALID_ITEM_SELECTOR = `${commandAttrs.selector("item")}:not([aria-disabled="true"])`;
const CommandRootContext = new Context("Command.Root");
const CommandListContext = new Context("Command.List");
const CommandGroupContainerContext = new Context("Command.Group");
const defaultState = {
  search: "",
  value: "",
  filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() }
};
class CommandRootState {
  static create(opts) {
    return CommandRootContext.set(new CommandRootState(opts));
  }
  opts;
  attachment;
  #updateScheduled = false;
  #isInitialMount = true;
  sortAfterTick = false;
  sortAndFilterAfterTick = false;
  allItems = /* @__PURE__ */ new Set();
  allGroups = /* @__PURE__ */ new Map();
  allIds = /* @__PURE__ */ new Map();
  // attempt to prevent the harsh delay when user is typing fast
  key = 0;
  viewportNode = null;
  inputNode = null;
  labelNode = null;
  // published state that the components and other things can react to
  commandState = defaultState;
  // internal state that we mutate in batches and publish to the `state` at once
  _commandState = defaultState;
  #snapshot() {
    return snapshot(this._commandState);
  }
  #scheduleUpdate() {
    if (this.#updateScheduled) return;
    this.#updateScheduled = true;
    afterTick(() => {
      this.#updateScheduled = false;
      const currentState = this.#snapshot();
      const hasStateChanged = !Object.is(this.commandState, currentState);
      if (hasStateChanged) {
        this.commandState = currentState;
        this.opts.onStateChange?.current?.(currentState);
      }
    });
  }
  setState(key, value, preventScroll) {
    if (Object.is(this._commandState[key], value)) return;
    this._commandState[key] = value;
    if (key === "search") {
      this.#filterItems();
      this.#sort();
    } else if (key === "value") {
      if (!preventScroll) this.#scrollSelectedIntoView();
    }
    this.#scheduleUpdate();
  }
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
    const defaults = { ...this._commandState, value: this.opts.value.current ?? "" };
    this._commandState = defaults;
    this.commandState = defaults;
    this.onkeydown = this.onkeydown.bind(this);
  }
  /**
   * Calculates score for an item based on search text and keywords.
   * Higher score = better match.
   *
   * @param value - Item's display text
   * @param keywords - Optional keywords to boost scoring
   * @returns Score from 0-1, where 0 = no match
   */
  #score(value, keywords) {
    const filter = this.opts.filter.current ?? computeCommandScore;
    const score = value ? filter(value, this._commandState.search, keywords) : 0;
    return score;
  }
  /**
   * Sorts items and groups based on search scores.
   * Groups are sorted by their highest scoring item.
   * When no search active, selects first item.
   */
  #sort() {
    if (!this._commandState.search || this.opts.shouldFilter.current === false) {
      if (!this._commandState.value || !this.#isInitialMount) {
        this.#selectFirstItem();
      }
      return;
    }
    const scores = this._commandState.filtered.items;
    const groups = [];
    for (const value of this._commandState.filtered.groups) {
      const items = this.allGroups.get(value);
      let max = 0;
      if (!items) {
        groups.push([value, max]);
        continue;
      }
      for (const item of items) {
        const score = scores.get(item);
        max = Math.max(score ?? 0, max);
      }
      groups.push([value, max]);
    }
    const listInsertionElement = this.viewportNode;
    const sorted = this.getValidItems().sort((a, b) => {
      const valueA = a.getAttribute("data-value");
      const valueB = b.getAttribute("data-value");
      const scoresA = scores.get(valueA) ?? 0;
      const scoresB = scores.get(valueB) ?? 0;
      return scoresB - scoresA;
    });
    for (const item of sorted) {
      const group = item.closest(COMMAND_GROUP_ITEMS_SELECTOR);
      if (group) {
        const itemToAppend = item.parentElement === group ? item : item.closest(`${COMMAND_GROUP_ITEMS_SELECTOR} > *`);
        if (itemToAppend) {
          group.appendChild(itemToAppend);
        }
      } else {
        const itemToAppend = item.parentElement === listInsertionElement ? item : item.closest(`${COMMAND_GROUP_ITEMS_SELECTOR} > *`);
        if (itemToAppend) {
          listInsertionElement?.appendChild(itemToAppend);
        }
      }
    }
    const sortedGroups = groups.sort((a, b) => b[1] - a[1]);
    for (const group of sortedGroups) {
      const element = listInsertionElement?.querySelector(`${COMMAND_GROUP_SELECTOR}[${COMMAND_VALUE_ATTR}="${cssEscape(group[0])}"]`);
      element?.parentElement?.appendChild(element);
    }
    this.#selectFirstItem();
  }
  /**
   * Sets current value and triggers re-render if cleared.
   *
   * @param value - New value to set
   */
  setValue(value, opts) {
    if (value !== this.opts.value.current && value === "") {
      afterTick(() => {
        this.key++;
      });
    }
    this.setState("value", value, opts);
    this.opts.value.current = value;
  }
  /**
   * Selects first non-disabled item on next tick.
   */
  #selectFirstItem() {
    afterTick(() => {
      const item = this.getValidItems().find((item2) => item2.getAttribute("aria-disabled") !== "true");
      const value = item?.getAttribute(COMMAND_VALUE_ATTR);
      const shouldPreventScroll = this.#isInitialMount && this.opts.disableInitialScroll.current;
      this.setValue(value ?? "", shouldPreventScroll);
      this.#isInitialMount = false;
    });
  }
  /**
   * Updates filtered items/groups based on search.
   * Recalculates scores and filtered count.
   */
  #filterItems() {
    if (!this._commandState.search || this.opts.shouldFilter.current === false) {
      this._commandState.filtered.count = this.allItems.size;
      return;
    }
    this._commandState.filtered.groups = /* @__PURE__ */ new Set();
    let itemCount = 0;
    for (const id of this.allItems) {
      const value = this.allIds.get(id)?.value ?? "";
      const keywords = this.allIds.get(id)?.keywords ?? [];
      const rank = this.#score(value, keywords);
      this._commandState.filtered.items.set(id, rank);
      if (rank > 0) itemCount++;
    }
    for (const [groupId, group] of this.allGroups) {
      for (const itemId of group) {
        const currItem = this._commandState.filtered.items.get(itemId);
        if (currItem && currItem > 0) {
          this._commandState.filtered.groups.add(groupId);
          break;
        }
      }
    }
    this._commandState.filtered.count = itemCount;
  }
  /**
   * Gets all non-disabled, visible command items.
   *
   * @returns Array of valid item elements
   * @remarks Exposed for direct item access and bound checking
   */
  getValidItems() {
    const node = this.opts.ref.current;
    if (!node) return [];
    const validItems = Array.from(node.querySelectorAll(COMMAND_VALID_ITEM_SELECTOR)).filter((el) => !!el);
    return validItems;
  }
  /**
   * Gets all visible command items.
   *
   * @returns Array of valid item elements
   * @remarks Exposed for direct item access and bound checking
   */
  getVisibleItems() {
    const node = this.opts.ref.current;
    if (!node) return [];
    const visibleItems = Array.from(node.querySelectorAll(COMMAND_ITEM_SELECTOR)).filter((el) => !!el);
    return visibleItems;
  }
  /** Returns all visible items in a matrix structure
   *
   * @remarks Returns empty if the command isn't configured as a grid
   *
   * @returns
   */
  get itemsGrid() {
    if (!this.isGrid) return [];
    const columns = this.opts.columns.current ?? 1;
    const items = this.getVisibleItems();
    const grid = [[]];
    let currentGroup = items[0]?.getAttribute("data-group");
    let column = 0;
    let row = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemGroup = item?.getAttribute("data-group");
      if (currentGroup !== itemGroup) {
        currentGroup = itemGroup;
        column = 1;
        row++;
        grid.push([{ index: i, firstRowOfGroup: true, ref: item }]);
      } else {
        column++;
        if (column > columns) {
          row++;
          column = 1;
          grid.push([]);
        }
        grid[row]?.push({
          index: i,
          firstRowOfGroup: grid[row]?.[0]?.firstRowOfGroup ?? i === 0,
          ref: item
        });
      }
    }
    return grid;
  }
  /**
   * Gets currently selected command item.
   *
   * @returns Selected element or undefined
   */
  #getSelectedItem() {
    const node = this.opts.ref.current;
    if (!node) return;
    const selectedNode = node.querySelector(`${COMMAND_VALID_ITEM_SELECTOR}[data-selected]`);
    if (!selectedNode) return;
    return selectedNode;
  }
  /**
   * Scrolls selected item into view.
   * Special handling for first items in groups.
   */
  #scrollSelectedIntoView() {
    afterTick(() => {
      const item = this.#getSelectedItem();
      if (!item) return;
      const grandparent = item.parentElement?.parentElement;
      if (!grandparent) return;
      if (this.isGrid) {
        const isFirstRowOfGroup = this.#itemIsFirstRowOfGroup(item);
        item.scrollIntoView({ block: "nearest" });
        if (isFirstRowOfGroup) {
          const closestGroupHeader = item?.closest(COMMAND_GROUP_SELECTOR)?.querySelector(COMMAND_GROUP_HEADING_SELECTOR);
          closestGroupHeader?.scrollIntoView({ block: "nearest" });
          return;
        }
      } else {
        const firstChildOfParent = getFirstNonCommentChild(grandparent);
        if (firstChildOfParent && firstChildOfParent.dataset?.value === item.dataset?.value) {
          const closestGroupHeader = item?.closest(COMMAND_GROUP_SELECTOR)?.querySelector(COMMAND_GROUP_HEADING_SELECTOR);
          closestGroupHeader?.scrollIntoView({ block: "nearest" });
          return;
        }
      }
      item.scrollIntoView({ block: "nearest" });
    });
  }
  #itemIsFirstRowOfGroup(item) {
    const grid = this.itemsGrid;
    if (grid.length === 0) return false;
    for (let r = 0; r < grid.length; r++) {
      const row = grid[r];
      if (row === void 0) continue;
      for (let c = 0; c < row.length; c++) {
        const column = row[c];
        if (column === void 0 || column.ref !== item) continue;
        return column.firstRowOfGroup;
      }
    }
    return false;
  }
  /**
   * Sets selection to item at specified index in valid items array.
   * If index is out of bounds, does nothing.
   *
   * @param index - Zero-based index of item to select
   * @remarks
   * Uses `getValidItems()` to get selectable items, filtering out disabled/hidden ones.
   * Access valid items directly via `getValidItems()` to check bounds before calling.
   *
   * @example
   * // get valid items length for bounds check
   * const items = getValidItems()
   * if (index < items.length) {
   *   updateSelectedToIndex(index)
   * }
   */
  updateSelectedToIndex(index) {
    const item = this.getValidItems()[index];
    if (!item) return;
    this.setValue(item.getAttribute(COMMAND_VALUE_ATTR) ?? "");
  }
  /**
   * Updates selected item by moving up/down relative to current selection.
   * Handles wrapping when loop option is enabled.
   *
   * @param change - Direction to move: 1 for next item, -1 for previous item
   * @remarks
   * The loop behavior wraps:
   * - From last item to first when moving next
   * - From first item to last when moving previous
   *
   * Uses `getValidItems()` to get all selectable items, which filters out disabled/hidden items.
   * You can call `getValidItems()` directly to get the current valid items array.
   *
   * @example
   * // select next item
   * updateSelectedByItem(1)
   *
   * // get all valid items
   * const items = getValidItems()
   */
  updateSelectedByItem(change) {
    const selected = this.#getSelectedItem();
    const items = this.getValidItems();
    const index = items.findIndex((item) => item === selected);
    let newSelected = items[index + change];
    if (this.opts.loop.current) {
      newSelected = index + change < 0 ? items[items.length - 1] : index + change === items.length ? items[0] : items[index + change];
    }
    if (newSelected) {
      this.setValue(newSelected.getAttribute(COMMAND_VALUE_ATTR) ?? "");
    }
  }
  /**
   * Moves selection to the first valid item in the next/previous group.
   * If no group is found, falls back to selecting the next/previous item globally.
   *
   * @param change - Direction to move: 1 for next group, -1 for previous group
   * @example
   * // move to first item in next group
   * updateSelectedByGroup(1)
   *
   * // move to first item in previous group
   * updateSelectedByGroup(-1)
   */
  updateSelectedByGroup(change) {
    const selected = this.#getSelectedItem();
    let group = selected?.closest(COMMAND_GROUP_SELECTOR);
    let item;
    while (group && !item) {
      group = change > 0 ? findNextSibling(group, COMMAND_GROUP_SELECTOR) : findPreviousSibling(group, COMMAND_GROUP_SELECTOR);
      item = group?.querySelector(COMMAND_VALID_ITEM_SELECTOR);
    }
    if (item) {
      this.setValue(item.getAttribute(COMMAND_VALUE_ATTR) ?? "");
    } else {
      this.updateSelectedByItem(change);
    }
  }
  /**
   * Maps item id to display value and search keywords.
   * Returns cleanup function to remove mapping.
   *
   * @param id - Unique item identifier
   * @param value - Display text
   * @param keywords - Optional search boost terms
   * @returns Cleanup function
   */
  registerValue(value, keywords) {
    if (!(value && value === this.allIds.get(value)?.value)) {
      this.allIds.set(value, { value, keywords });
    }
    this._commandState.filtered.items.set(value, this.#score(value, keywords));
    if (!this.sortAfterTick) {
      this.sortAfterTick = true;
      afterTick(() => {
        this.#sort();
        this.sortAfterTick = false;
      });
    }
    return () => {
      this.allIds.delete(value);
    };
  }
  /**
   * Registers item in command list and its group.
   * Handles filtering, sorting and selection updates.
   *
   * @param id - Item identifier
   * @param groupId - Optional group to add item to
   * @returns Cleanup function that handles selection
   */
  registerItem(id, groupId) {
    this.allItems.add(id);
    if (groupId) {
      if (!this.allGroups.has(groupId)) {
        this.allGroups.set(groupId, /* @__PURE__ */ new Set([id]));
      } else {
        this.allGroups.get(groupId).add(id);
      }
    }
    if (!this.sortAndFilterAfterTick) {
      this.sortAndFilterAfterTick = true;
      afterTick(() => {
        this.#filterItems();
        this.#sort();
        this.sortAndFilterAfterTick = false;
      });
    }
    this.#scheduleUpdate();
    return () => {
      const selectedItem = this.#getSelectedItem();
      this.allItems.delete(id);
      this.commandState.filtered.items.delete(id);
      this.#filterItems();
      if (selectedItem?.getAttribute("id") === id) {
        this.#selectFirstItem();
      }
      this.#scheduleUpdate();
    };
  }
  /**
   * Creates empty group if not exists.
   *
   * @param id - Group identifier
   * @returns Cleanup function
   */
  registerGroup(id) {
    if (!this.allGroups.has(id)) {
      this.allGroups.set(id, /* @__PURE__ */ new Set());
    }
    return () => {
      this.allIds.delete(id);
      this.allGroups.delete(id);
    };
  }
  get isGrid() {
    return this.opts.columns.current !== null;
  }
  /**
   * Selects last valid item.
   */
  #last() {
    return this.updateSelectedToIndex(this.getValidItems().length - 1);
  }
  /**
   * Handles next item selection:
   * - Meta: Jump to last
   * - Alt: Next group
   * - Default: Next item
   *
   * @param e - Keyboard event
   */
  #next(e) {
    e.preventDefault();
    if (e.metaKey) {
      this.#last();
    } else if (e.altKey) {
      this.updateSelectedByGroup(1);
    } else {
      this.updateSelectedByItem(1);
    }
  }
  #down(e) {
    if (this.opts.columns.current === null) return;
    e.preventDefault();
    if (e.metaKey) {
      this.updateSelectedByGroup(1);
    } else {
      this.updateSelectedByItem(this.#nextRowColumnOffset(e));
    }
  }
  #getColumn(item, grid) {
    if (grid.length === 0) return null;
    for (let r = 0; r < grid.length; r++) {
      const row = grid[r];
      if (row === void 0) continue;
      for (let c = 0; c < row.length; c++) {
        const column = row[c];
        if (column === void 0 || column.ref !== item) continue;
        return { columnIndex: c, rowIndex: r };
      }
    }
    return null;
  }
  #nextRowColumnOffset(e) {
    const grid = this.itemsGrid;
    const selected = this.#getSelectedItem();
    if (!selected) return 0;
    const column = this.#getColumn(selected, grid);
    if (!column) return 0;
    let newItem = null;
    const skipRows = e.altKey ? 1 : 0;
    if (e.altKey && column.rowIndex === grid.length - 2 && !this.opts.loop.current) {
      newItem = this.#findNextNonDisabledItem({
        start: grid.length - 1,
        end: grid.length,
        expectedColumnIndex: column.columnIndex,
        grid
      });
    } else if (column.rowIndex === grid.length - 1) {
      if (!this.opts.loop.current) return 0;
      newItem = this.#findNextNonDisabledItem({
        start: 0 + skipRows,
        end: column.rowIndex,
        expectedColumnIndex: column.columnIndex,
        grid
      });
    } else {
      newItem = this.#findNextNonDisabledItem({
        start: column.rowIndex + 1 + skipRows,
        end: grid.length,
        expectedColumnIndex: column.columnIndex,
        grid
      });
      if (newItem === null && this.opts.loop.current) {
        newItem = this.#findNextNonDisabledItem({
          start: 0,
          end: column.rowIndex,
          expectedColumnIndex: column.columnIndex,
          grid
        });
      }
    }
    return this.#calculateOffset(selected, newItem);
  }
  /** Attempts to find the next non-disabled column that matches the expected column.
   *
   * @remarks
   * - Skips over disabled columns
   * - When a row is shorter than the expected column it defaults to the last item in the row
   *
   * @param param0
   * @returns
   */
  #findNextNonDisabledItem({ start, end, grid, expectedColumnIndex }) {
    let newItem = null;
    for (let r = start; r < end; r++) {
      const row = grid[r];
      newItem = row[expectedColumnIndex]?.ref ?? null;
      if (newItem !== null && itemIsDisabled(newItem)) {
        newItem = null;
        continue;
      }
      if (newItem === null) {
        for (let i = row.length - 1; i >= 0; i--) {
          const item = row[row.length - 1];
          if (item === void 0 || itemIsDisabled(item.ref)) continue;
          newItem = item.ref;
          break;
        }
      }
      break;
    }
    return newItem;
  }
  #calculateOffset(selected, newSelected) {
    if (newSelected === null) return 0;
    const items = this.getValidItems();
    const ogIndex = items.findIndex((item) => item === selected);
    const newIndex = items.findIndex((item) => item === newSelected);
    return newIndex - ogIndex;
  }
  #up(e) {
    if (this.opts.columns.current === null) return;
    e.preventDefault();
    if (e.metaKey) {
      this.updateSelectedByGroup(-1);
    } else {
      this.updateSelectedByItem(this.#previousRowColumnOffset(e));
    }
  }
  #previousRowColumnOffset(e) {
    const grid = this.itemsGrid;
    const selected = this.#getSelectedItem();
    if (selected === void 0) return 0;
    const column = this.#getColumn(selected, grid);
    if (column === null) return 0;
    let newItem = null;
    const skipRows = e.altKey ? 1 : 0;
    if (e.altKey && column.rowIndex === 1 && this.opts.loop.current === false) {
      newItem = this.#findNextNonDisabledItemDesc({
        start: 0,
        end: 0,
        expectedColumnIndex: column.columnIndex,
        grid
      });
    } else if (column.rowIndex === 0) {
      if (this.opts.loop.current === false) return 0;
      newItem = this.#findNextNonDisabledItemDesc({
        start: grid.length - 1 - skipRows,
        end: column.rowIndex + 1,
        expectedColumnIndex: column.columnIndex,
        grid
      });
    } else {
      newItem = this.#findNextNonDisabledItemDesc({
        start: column.rowIndex - 1 - skipRows,
        end: 0,
        expectedColumnIndex: column.columnIndex,
        grid
      });
      if (newItem === null && this.opts.loop.current) {
        newItem = this.#findNextNonDisabledItemDesc({
          start: grid.length - 1,
          end: column.rowIndex + 1,
          expectedColumnIndex: column.columnIndex,
          grid
        });
      }
    }
    return this.#calculateOffset(selected, newItem);
  }
  /**
   * Attempts to find the next non-disabled column that matches the expected column.
   *
   * @remarks
   * - Skips over disabled columns
   * - When a row is shorter than the expected column it defaults to the last item in the row
   */
  #findNextNonDisabledItemDesc({ start, end, grid, expectedColumnIndex }) {
    let newItem = null;
    for (let r = start; r >= end; r--) {
      const row = grid[r];
      if (row === void 0) continue;
      newItem = row[expectedColumnIndex]?.ref ?? null;
      if (newItem !== null && itemIsDisabled(newItem)) {
        newItem = null;
        continue;
      }
      if (newItem === null) {
        for (let i = row.length - 1; i >= 0; i--) {
          const item = row[row.length - 1];
          if (item === void 0 || itemIsDisabled(item.ref)) continue;
          newItem = item.ref;
          break;
        }
      }
      break;
    }
    return newItem;
  }
  /**
   * Handles previous item selection:
   * - Meta: Jump to first
   * - Alt: Previous group
   * - Default: Previous item
   *
   * @param e - Keyboard event
   */
  #prev(e) {
    e.preventDefault();
    if (e.metaKey) {
      this.updateSelectedToIndex(0);
    } else if (e.altKey) {
      this.updateSelectedByGroup(-1);
    } else {
      this.updateSelectedByItem(-1);
    }
  }
  onkeydown(e) {
    const isVim = this.opts.vimBindings.current && e.ctrlKey;
    switch (e.key) {
      case n:
      case j: {
        if (isVim) {
          if (this.isGrid) {
            this.#down(e);
          } else {
            this.#next(e);
          }
        }
        break;
      }
      case l: {
        if (isVim) {
          if (this.isGrid) {
            this.#next(e);
          }
        }
        break;
      }
      case ARROW_DOWN:
        if (this.isGrid) {
          this.#down(e);
        } else {
          this.#next(e);
        }
        break;
      case ARROW_RIGHT:
        if (!this.isGrid) break;
        this.#next(e);
        break;
      case p:
      case k: {
        if (isVim) {
          if (this.isGrid) {
            this.#up(e);
          } else {
            this.#prev(e);
          }
        }
        break;
      }
      case h: {
        if (isVim && this.isGrid) {
          this.#prev(e);
        }
        break;
      }
      case ARROW_UP:
        if (this.isGrid) {
          this.#up(e);
        } else {
          this.#prev(e);
        }
        break;
      case ARROW_LEFT:
        if (!this.isGrid) break;
        this.#prev(e);
        break;
      case HOME:
        e.preventDefault();
        this.updateSelectedToIndex(0);
        break;
      case END:
        e.preventDefault();
        this.#last();
        break;
      case ENTER: {
        if (!e.isComposing && e.keyCode !== 229) {
          e.preventDefault();
          const item = this.#getSelectedItem();
          if (item) {
            item?.click();
          }
        }
      }
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "application",
    [commandAttrs.root]: "",
    tabindex: -1,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function itemIsDisabled(item) {
  return item.getAttribute("aria-disabled") === "true";
}
class CommandEmptyState {
  static create(opts) {
    return new CommandEmptyState(opts, CommandRootContext.get());
  }
  opts;
  root;
  attachment;
  #shouldRender = derived(() => {
    return this.root._commandState.filtered.count === 0 && this.#isInitialRender === false || this.opts.forceMount.current;
  });
  get shouldRender() {
    return this.#shouldRender();
  }
  set shouldRender($$value) {
    return this.#shouldRender($$value);
  }
  #isInitialRender = true;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "presentation",
    [commandAttrs.empty]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class CommandGroupContainerState {
  static create(opts) {
    return CommandGroupContainerContext.set(new CommandGroupContainerState(opts, CommandRootContext.get()));
  }
  opts;
  root;
  attachment;
  #shouldRender = derived(() => {
    if (this.opts.forceMount.current) return true;
    if (this.root.opts.shouldFilter.current === false) return true;
    if (!this.root.commandState.search) return true;
    return this.root._commandState.filtered.groups.has(this.trueValue);
  });
  get shouldRender() {
    return this.#shouldRender();
  }
  set shouldRender($$value) {
    return this.#shouldRender($$value);
  }
  headingNode = null;
  trueValue = "";
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.trueValue = opts.value.current ?? opts.id.current;
    watch(() => this.trueValue, () => {
      return this.root.registerGroup(this.trueValue);
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "presentation",
    hidden: this.shouldRender ? void 0 : true,
    "data-value": this.trueValue,
    [commandAttrs.group]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class CommandGroupHeadingState {
  static create(opts) {
    return new CommandGroupHeadingState(opts, CommandGroupContainerContext.get());
  }
  opts;
  group;
  attachment;
  constructor(opts, group) {
    this.opts = opts;
    this.group = group;
    this.attachment = attachRef(this.opts.ref, (v) => this.group.headingNode = v);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [commandAttrs["group-heading"]]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class CommandGroupItemsState {
  static create(opts) {
    return new CommandGroupItemsState(opts, CommandGroupContainerContext.get());
  }
  opts;
  group;
  attachment;
  constructor(opts, group) {
    this.opts = opts;
    this.group = group;
    this.attachment = attachRef(this.opts.ref);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "group",
    [commandAttrs["group-items"]]: "",
    "aria-labelledby": this.group.headingNode?.id ?? void 0,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class CommandInputState {
  static create(opts) {
    return new CommandInputState(opts, CommandRootContext.get());
  }
  opts;
  root;
  attachment;
  #selectedItemId = derived(() => {
    const item = this.root.viewportNode?.querySelector(`${COMMAND_ITEM_SELECTOR}[${COMMAND_VALUE_ATTR}="${cssEscape(this.root.opts.value.current)}"]`);
    if (item === void 0 || item === null) return;
    return item.getAttribute("id") ?? void 0;
  });
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.inputNode = v);
    watch(() => this.opts.ref.current, () => {
      const node = this.opts.ref.current;
      if (node && this.opts.autofocus.current) {
        afterSleep(10, () => node.focus());
      }
    });
    watch(() => this.opts.value.current, () => {
      if (this.root.commandState.search !== this.opts.value.current) {
        this.root.setState("search", this.opts.value.current);
      }
    });
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    type: "text",
    [commandAttrs.input]: "",
    autocomplete: "off",
    autocorrect: "off",
    spellcheck: false,
    "aria-autocomplete": "list",
    role: "combobox",
    "aria-expanded": boolToStr(true),
    "aria-controls": this.root.viewportNode?.id ?? void 0,
    "aria-labelledby": this.root.labelNode?.id ?? void 0,
    "aria-activedescendant": this.#selectedItemId(),
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class CommandItemState {
  static create(opts) {
    const group = CommandGroupContainerContext.getOr(null);
    return new CommandItemState({ ...opts, group }, CommandRootContext.get());
  }
  opts;
  root;
  attachment;
  #group = null;
  #trueForceMount = derived(() => {
    return this.opts.forceMount.current || this.#group?.opts.forceMount.current === true;
  });
  #shouldRender = derived(() => {
    this.opts.ref.current;
    if (this.#trueForceMount() || this.root.opts.shouldFilter.current === false || !this.root.commandState.search) {
      return true;
    }
    const currentScore = this.root.commandState.filtered.items.get(this.trueValue);
    if (currentScore === void 0) return false;
    return currentScore > 0;
  });
  get shouldRender() {
    return this.#shouldRender();
  }
  set shouldRender($$value) {
    return this.#shouldRender($$value);
  }
  #isSelected = derived(() => this.root.opts.value.current === this.trueValue && this.trueValue !== "");
  get isSelected() {
    return this.#isSelected();
  }
  set isSelected($$value) {
    return this.#isSelected($$value);
  }
  trueValue = "";
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.#group = CommandGroupContainerContext.getOr(null);
    this.trueValue = opts.value.current;
    this.attachment = attachRef(this.opts.ref);
    watch(
      [
        () => this.trueValue,
        () => this.#group?.trueValue,
        () => this.opts.forceMount.current
      ],
      () => {
        if (this.opts.forceMount.current || !this.trueValue) return;
        return this.root.registerItem(this.trueValue, this.#group?.trueValue);
      }
    );
    watch([() => this.opts.value.current, () => this.opts.ref.current], () => {
      if (this.opts.value.current) {
        this.trueValue = this.opts.value.current;
      } else if (this.opts.ref.current?.textContent) {
        this.trueValue = this.opts.ref.current.textContent.trim();
      }
      if (this.trueValue) {
        this.root.registerValue(this.trueValue, opts.keywords.current.map((kw) => kw.trim()));
        this.opts.ref.current?.setAttribute(COMMAND_VALUE_ATTR, this.trueValue);
      }
    });
    this.onclick = this.onclick.bind(this);
    this.onpointermove = this.onpointermove.bind(this);
  }
  #onSelect() {
    if (this.opts.disabled.current) return;
    this.#select();
    this.opts.onSelect?.current();
  }
  #select() {
    if (this.opts.disabled.current) return;
    this.root.setValue(this.trueValue, true);
  }
  onpointermove(_) {
    if (this.opts.disabled.current || this.root.opts.disablePointerSelection.current) return;
    this.#select();
  }
  onclick(_) {
    if (this.opts.disabled.current) return;
    this.#onSelect();
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "aria-disabled": boolToStr(this.opts.disabled.current),
    "aria-selected": boolToStr(this.isSelected),
    "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
    "data-selected": boolToEmptyStrOrUndef(this.isSelected),
    "data-value": this.trueValue,
    "data-group": this.#group?.trueValue,
    [commandAttrs.item]: "",
    role: "option",
    onpointermove: this.onpointermove,
    onclick: this.onclick,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class CommandListState {
  static create(opts) {
    return CommandListContext.set(new CommandListState(opts, CommandRootContext.get()));
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "listbox",
    "aria-label": this.opts.ariaLabel.current,
    [commandAttrs.list]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class CommandLabelState {
  static create(opts) {
    return new CommandLabelState(opts, CommandRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.labelNode = v);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [commandAttrs["input-label"]]: "",
    for: this.opts.for?.current,
    style: srOnlyStyles,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function _command_label($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const labelState = CommandLabelState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, labelState.props);
    $$renderer2.push(`<label${attributes({ ...mergedProps })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></label>`);
    bind_props($$props, { ref });
  });
}
function Command$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      value = "",
      onValueChange = noop,
      onStateChange = noop,
      loop = false,
      shouldFilter = true,
      filter = computeCommandScore,
      label = "",
      vimBindings = true,
      disablePointerSelection = false,
      disableInitialScroll = false,
      columns = null,
      children,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rootState = CommandRootState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      filter: boxWith(() => filter),
      shouldFilter: boxWith(() => shouldFilter),
      loop: boxWith(() => loop),
      value: boxWith(() => value, (v) => {
        if (value !== v) {
          value = v;
          onValueChange(v);
        }
      }),
      vimBindings: boxWith(() => vimBindings),
      disablePointerSelection: boxWith(() => disablePointerSelection),
      disableInitialScroll: boxWith(() => disableInitialScroll),
      onStateChange: boxWith(() => onStateChange),
      columns: boxWith(() => columns)
    });
    const updateSelectedToIndex = (i) => rootState.updateSelectedToIndex(i);
    const updateSelectedByGroup = (c) => rootState.updateSelectedByGroup(c);
    const updateSelectedByItem = (c) => rootState.updateSelectedByItem(c);
    const getValidItems = () => rootState.getValidItems();
    const mergedProps = mergeProps(restProps, rootState.props);
    function Label2($$renderer3) {
      _command_label($$renderer3, {
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(label)}`);
        },
        $$slots: { default: true }
      });
    }
    if (child) {
      $$renderer2.push("<!--[-->");
      Label2($$renderer2);
      $$renderer2.push(`<!----> `);
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      Label2($$renderer2);
      $$renderer2.push(`<!----> `);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, {
      ref,
      value,
      updateSelectedToIndex,
      updateSelectedByGroup,
      updateSelectedByItem,
      getValidItems
    });
  });
}
function Command_empty$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      children,
      child,
      forceMount = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const emptyState = CommandEmptyState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      forceMount: boxWith(() => forceMount)
    });
    const mergedProps = mergeProps(emptyState.props, restProps);
    if (emptyState.shouldRender) {
      $$renderer2.push("<!--[-->");
      if (child) {
        $$renderer2.push("<!--[-->");
        child($$renderer2, { props: mergedProps });
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
        children?.($$renderer2);
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Command_group$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      value = "",
      forceMount = false,
      children,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const groupState = CommandGroupContainerState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      forceMount: boxWith(() => forceMount),
      value: boxWith(() => value)
    });
    const mergedProps = mergeProps(restProps, groupState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Command_group_heading($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      children,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const headingState = CommandGroupHeadingState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, headingState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Command_group_items($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      children,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const groupItemsState = CommandGroupItemsState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, groupItemsState.props);
    $$renderer2.push(`<div style="display: contents;">`);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { ref });
  });
}
function Command_input$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      value = "",
      autofocus = false,
      id = createId(uid),
      ref = null,
      child,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const inputState = CommandInputState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      value: boxWith(() => value, (v) => {
        value = v;
      }),
      autofocus: boxWith(() => autofocus ?? false)
    });
    const mergedProps = mergeProps(restProps, inputState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<input${attributes({ ...mergedProps, value }, void 0, void 0, void 0, 4)}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { value, ref });
  });
}
function Command_item$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      value = "",
      disabled = false,
      children,
      child,
      onSelect = noop,
      forceMount = false,
      keywords = [],
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const itemState = CommandItemState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      value: boxWith(() => value),
      disabled: boxWith(() => disabled),
      onSelect: boxWith(() => onSelect),
      forceMount: boxWith(() => forceMount),
      keywords: boxWith(() => keywords)
    });
    const mergedProps = mergeProps(restProps, itemState.props);
    $$renderer2.push(`<!---->`);
    {
      $$renderer2.push(`<div style="display: contents;" data-item-wrapper=""${attr("data-value", itemState.trueValue)}>`);
      if (itemState.shouldRender) {
        $$renderer2.push("<!--[-->");
        if (child) {
          $$renderer2.push("<!--[-->");
          child($$renderer2, { props: mergedProps });
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
          children?.($$renderer2);
          $$renderer2.push(`<!----></div>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!---->`);
    bind_props($$props, { ref });
  });
}
function Command_list$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      child,
      children,
      "aria-label": ariaLabel,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const listState = CommandListState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      ariaLabel: boxWith(() => ariaLabel ?? "Suggestions...")
    });
    const mergedProps = mergeProps(restProps, listState.props);
    $$renderer2.push(`<!---->`);
    {
      if (child) {
        $$renderer2.push("<!--[-->");
        child($$renderer2, { props: mergedProps });
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
        children?.($$renderer2);
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!---->`);
    bind_props($$props, { ref });
  });
}
const SCORE_CONTINUE_MATCH = 1;
const SCORE_SPACE_WORD_JUMP = 0.9;
const SCORE_NON_SPACE_WORD_JUMP = 0.8;
const SCORE_CHARACTER_JUMP = 0.17;
const SCORE_TRANSPOSITION = 0.1;
const PENALTY_SKIPPED = 0.999;
const PENALTY_CASE_MISMATCH = 0.9999;
const PENALTY_NOT_COMPLETE = 0.99;
const IS_GAP_REGEXP = /[\\/_+.#"@[({&]/;
const COUNT_GAPS_REGEXP = /[\\/_+.#"@[({&]/g;
const IS_SPACE_REGEXP = /[\s-]/;
const COUNT_SPACE_REGEXP = /[\s-]/g;
function computeCommandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, stringIndex, abbreviationIndex, memoizedResults) {
  if (abbreviationIndex === abbreviation.length) {
    if (stringIndex === string.length)
      return SCORE_CONTINUE_MATCH;
    return PENALTY_NOT_COMPLETE;
  }
  const memoizeKey = `${stringIndex},${abbreviationIndex}`;
  if (memoizedResults[memoizeKey] !== void 0)
    return memoizedResults[memoizeKey];
  const abbreviationChar = lowerAbbreviation.charAt(abbreviationIndex);
  let index = lowerString.indexOf(abbreviationChar, stringIndex);
  let highScore = 0;
  let score, transposedScore, wordBreaks, spaceBreaks;
  while (index >= 0) {
    score = computeCommandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 1, memoizedResults);
    if (score > highScore) {
      if (index === stringIndex) {
        score *= SCORE_CONTINUE_MATCH;
      } else if (IS_GAP_REGEXP.test(string.charAt(index - 1))) {
        score *= SCORE_NON_SPACE_WORD_JUMP;
        wordBreaks = string.slice(stringIndex, index - 1).match(COUNT_GAPS_REGEXP);
        if (wordBreaks && stringIndex > 0) {
          score *= PENALTY_SKIPPED ** wordBreaks.length;
        }
      } else if (IS_SPACE_REGEXP.test(string.charAt(index - 1))) {
        score *= SCORE_SPACE_WORD_JUMP;
        spaceBreaks = string.slice(stringIndex, index - 1).match(COUNT_SPACE_REGEXP);
        if (spaceBreaks && stringIndex > 0) {
          score *= PENALTY_SKIPPED ** spaceBreaks.length;
        }
      } else {
        score *= SCORE_CHARACTER_JUMP;
        if (stringIndex > 0) {
          score *= PENALTY_SKIPPED ** (index - stringIndex);
        }
      }
      if (string.charAt(index) !== abbreviation.charAt(abbreviationIndex)) {
        score *= PENALTY_CASE_MISMATCH;
      }
    }
    if (score < SCORE_TRANSPOSITION && lowerString.charAt(index - 1) === lowerAbbreviation.charAt(abbreviationIndex + 1) || lowerAbbreviation.charAt(abbreviationIndex + 1) === lowerAbbreviation.charAt(abbreviationIndex) && lowerString.charAt(index - 1) !== lowerAbbreviation.charAt(abbreviationIndex)) {
      transposedScore = computeCommandScoreInner(string, abbreviation, lowerString, lowerAbbreviation, index + 1, abbreviationIndex + 2, memoizedResults);
      if (transposedScore * SCORE_TRANSPOSITION > score) {
        score = transposedScore * SCORE_TRANSPOSITION;
      }
    }
    if (score > highScore) {
      highScore = score;
    }
    index = lowerString.indexOf(abbreviationChar, index + 1);
  }
  memoizedResults[memoizeKey] = highScore;
  return highScore;
}
function formatInput(string) {
  return string.toLowerCase().replace(COUNT_SPACE_REGEXP, " ");
}
function computeCommandScore(command, search, commandKeywords) {
  command = commandKeywords && commandKeywords.length > 0 ? `${`${command} ${commandKeywords?.join(" ")}`}` : command;
  return computeCommandScoreInner(command, search, formatInput(command), formatInput(search), 0, 0, {});
}
const popoverAttrs = createBitsAttrs({
  component: "popover",
  parts: ["root", "trigger", "content", "close", "overlay"]
});
const PopoverRootContext = new Context("Popover.Root");
class PopoverRootState {
  static create(opts) {
    return PopoverRootContext.set(new PopoverRootState(opts));
  }
  opts;
  contentNode = null;
  contentPresence;
  triggerNode = null;
  overlayNode = null;
  overlayPresence;
  constructor(opts) {
    this.opts = opts;
    this.contentPresence = new PresenceManager({
      ref: boxWith(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
    this.overlayPresence = new PresenceManager({ ref: boxWith(() => this.overlayNode), open: this.opts.open });
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  handleClose() {
    if (!this.opts.open.current) return;
    this.opts.open.current = false;
  }
}
class PopoverTriggerState {
  static create(opts) {
    return new PopoverTriggerState(opts, PopoverRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.triggerNode = v);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button !== 0) return;
    this.root.toggleOpen();
  }
  onkeydown(e) {
    if (this.opts.disabled.current) return;
    if (!(e.key === ENTER || e.key === SPACE)) return;
    e.preventDefault();
    this.root.toggleOpen();
  }
  #getAriaControls() {
    if (this.root.opts.open.current && this.root.contentNode?.id) {
      return this.root.contentNode?.id;
    }
    return void 0;
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "aria-haspopup": "dialog",
    "aria-expanded": boolToStr(this.root.opts.open.current),
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    "aria-controls": this.#getAriaControls(),
    [popoverAttrs.trigger]: "",
    disabled: this.opts.disabled.current,
    //
    onkeydown: this.onkeydown,
    onclick: this.onclick,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class PopoverContentState {
  static create(opts) {
    return new PopoverContentState(opts, PopoverRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref, (v) => this.root.contentNode = v);
  }
  onInteractOutside = (e) => {
    this.opts.onInteractOutside.current(e);
    if (e.defaultPrevented) return;
    if (!isElement$1(e.target)) return;
    const closestTrigger = e.target.closest(popoverAttrs.selector("trigger"));
    if (closestTrigger && closestTrigger === this.root.triggerNode) return;
    if (this.opts.customAnchor.current) {
      if (isElement$1(this.opts.customAnchor.current)) {
        if (this.opts.customAnchor.current.contains(e.target)) return;
      } else if (typeof this.opts.customAnchor.current === "string") {
        const el = document.querySelector(this.opts.customAnchor.current);
        if (el && el.contains(e.target)) return;
      }
    }
    this.root.handleClose();
  };
  onEscapeKeydown = (e) => {
    this.opts.onEscapeKeydown.current(e);
    if (e.defaultPrevented) return;
    this.root.handleClose();
  };
  get shouldRender() {
    return this.root.contentPresence.shouldRender;
  }
  #snippetProps = derived(() => ({ open: this.root.opts.open.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    tabindex: -1,
    "data-state": getDataOpenClosed(this.root.opts.open.current),
    [popoverAttrs.content]: "",
    style: { pointerEvents: "auto" },
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
  popperProps = {
    onInteractOutside: this.onInteractOutside,
    onEscapeKeydown: this.onEscapeKeydown
  };
}
function Popover_content$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      child,
      children,
      ref = null,
      id = createId(uid),
      forceMount = false,
      onCloseAutoFocus = noop,
      onEscapeKeydown = noop,
      onInteractOutside = noop,
      trapFocus = true,
      preventScroll = false,
      customAnchor = null,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const contentState = PopoverContentState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      onInteractOutside: boxWith(() => onInteractOutside),
      onEscapeKeydown: boxWith(() => onEscapeKeydown),
      customAnchor: boxWith(() => customAnchor)
    });
    const mergedProps = mergeProps(restProps, contentState.props);
    if (forceMount) {
      $$renderer2.push("<!--[-->");
      {
        let popper = function($$renderer3, { props, wrapperProps }) {
          const finalProps = mergeProps(props, { style: getFloatingContentCSSVars("popover") });
          if (child) {
            $$renderer3.push("<!--[-->");
            child($$renderer3, {
              props: finalProps,
              wrapperProps,
              ...contentState.snippetProps
            });
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
            children?.($$renderer3);
            $$renderer3.push(`<!----></div></div>`);
          }
          $$renderer3.push(`<!--]-->`);
        };
        Popper_layer_force_mount($$renderer2, spread_props([
          mergedProps,
          contentState.popperProps,
          {
            ref: contentState.opts.ref,
            enabled: contentState.root.opts.open.current,
            id,
            trapFocus,
            preventScroll,
            loop: true,
            forceMount: true,
            customAnchor,
            onCloseAutoFocus,
            shouldRender: contentState.shouldRender,
            popper,
            $$slots: { popper: true }
          }
        ]));
      }
    } else {
      $$renderer2.push("<!--[!-->");
      if (!forceMount) {
        $$renderer2.push("<!--[-->");
        {
          let popper = function($$renderer3, { props, wrapperProps }) {
            const finalProps = mergeProps(props, { style: getFloatingContentCSSVars("popover") });
            if (child) {
              $$renderer3.push("<!--[-->");
              child($$renderer3, {
                props: finalProps,
                wrapperProps,
                ...contentState.snippetProps
              });
              $$renderer3.push(`<!---->`);
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push(`<div${attributes({ ...wrapperProps })}><div${attributes({ ...finalProps })}>`);
              children?.($$renderer3);
              $$renderer3.push(`<!----></div></div>`);
            }
            $$renderer3.push(`<!--]-->`);
          };
          Popper_layer($$renderer2, spread_props([
            mergedProps,
            contentState.popperProps,
            {
              ref: contentState.opts.ref,
              open: contentState.root.opts.open.current,
              id,
              trapFocus,
              preventScroll,
              loop: true,
              forceMount: false,
              customAnchor,
              onCloseAutoFocus,
              shouldRender: contentState.shouldRender,
              popper,
              $$slots: { popper: true }
            }
          ]));
        }
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Popover_trigger$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      id = createId(uid),
      ref = null,
      type = "button",
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const triggerState = PopoverTriggerState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = mergeProps(restProps, triggerState.props, { type });
    Floating_layer_anchor($$renderer2, {
      id,
      ref: triggerState.opts.ref,
      children: ($$renderer3) => {
        if (child) {
          $$renderer3.push("<!--[-->");
          child($$renderer3, { props: mergedProps });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<button${attributes({ ...mergedProps })}>`);
          children?.($$renderer3);
          $$renderer3.push(`<!----></button>`);
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    bind_props($$props, { ref });
  });
}
const labelAttrs = createBitsAttrs({ component: "label", parts: ["root"] });
class LabelRootState {
  static create(opts) {
    return new LabelRootState(opts);
  }
  opts;
  attachment;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
    this.onmousedown = this.onmousedown.bind(this);
  }
  onmousedown(e) {
    if (e.detail > 1) e.preventDefault();
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [labelAttrs.root]: "",
    onmousedown: this.onmousedown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Label$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      children,
      child,
      id = createId(uid),
      ref = null,
      for: forProp,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rootState = LabelRootState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, rootState.props, { for: forProp });
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<label${attributes({ ...mergedProps, for: forProp })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></label>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Popover($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = false,
      onOpenChange = noop,
      onOpenChangeComplete = noop,
      children
    } = $$props;
    PopoverRootState.create({
      open: boxWith(() => open, (v) => {
        open = v;
        onOpenChange(v);
      }),
      onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
    });
    Floating_layer($$renderer2, {
      children: ($$renderer3) => {
        children?.($$renderer3);
        $$renderer3.push(`<!---->`);
      }
    });
    bind_props($$props, { open });
  });
}
function Select($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = void 0,
      onValueChange = noop,
      name = "",
      disabled = false,
      type,
      open = false,
      onOpenChange = noop,
      onOpenChangeComplete = noop,
      loop = false,
      scrollAlignment = "nearest",
      required = false,
      items = [],
      allowDeselect = false,
      autocomplete,
      children
    } = $$props;
    function handleDefaultValue() {
      if (value !== void 0) return;
      value = type === "single" ? "" : [];
    }
    handleDefaultValue();
    watch.pre(() => value, () => {
      handleDefaultValue();
    });
    let inputValue = "";
    const rootState = SelectRootState.create({
      type,
      value: boxWith(() => value, (v) => {
        value = v;
        onValueChange(v);
      }),
      disabled: boxWith(() => disabled),
      required: boxWith(() => required),
      open: boxWith(() => open, (v) => {
        open = v;
        onOpenChange(v);
      }),
      loop: boxWith(() => loop),
      scrollAlignment: boxWith(() => scrollAlignment),
      name: boxWith(() => name),
      isCombobox: false,
      items: boxWith(() => items),
      allowDeselect: boxWith(() => allowDeselect),
      inputValue: boxWith(() => inputValue, (v) => inputValue = v),
      onOpenChangeComplete: boxWith(() => onOpenChangeComplete)
    });
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Floating_layer($$renderer3, {
        children: ($$renderer4) => {
          children?.($$renderer4);
          $$renderer4.push(`<!---->`);
        }
      });
      $$renderer3.push(`<!----> `);
      if (Array.isArray(rootState.opts.value.current)) {
        $$renderer3.push("<!--[-->");
        if (rootState.opts.value.current.length === 0) {
          $$renderer3.push("<!--[-->");
          Select_hidden_input($$renderer3, { autocomplete });
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(rootState.opts.value.current);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            Select_hidden_input($$renderer3, { value: item, autocomplete });
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]-->`);
      } else {
        $$renderer3.push("<!--[!-->");
        Select_hidden_input($$renderer3, {
          autocomplete,
          get value() {
            return rootState.opts.value.current;
          },
          set value($$value) {
            rootState.opts.value.current = $$value;
            $$settled = false;
          }
        });
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { value, open });
  });
}
function Select_trigger$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      child,
      children,
      type = "button",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const triggerState = SelectTriggerState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, triggerState.props, { type });
    $$renderer2.push(`<!---->`);
    Floating_layer_anchor($$renderer2, {
      id,
      ref: triggerState.opts.ref,
      children: ($$renderer3) => {
        if (child) {
          $$renderer3.push("<!--[-->");
          child($$renderer3, { props: mergedProps });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<button${attributes({ ...mergedProps })}>`);
          children?.($$renderer3);
          $$renderer3.push(`<!----></button>`);
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!---->`);
    bind_props($$props, { ref });
  });
}
function Label($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Label$1($$renderer3, spread_props([
        {
          "data-slot": "label",
          class: cn("flex select-none items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Select_item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      value,
      label,
      children: childrenProp,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      {
        let children = function($$renderer4, { selected, highlighted }) {
          $$renderer4.push(`<span class="absolute right-2 flex size-3.5 items-center justify-center">`);
          if (selected) {
            $$renderer4.push("<!--[-->");
            Check($$renderer4, { class: "size-4" });
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]--></span> `);
          if (childrenProp) {
            $$renderer4.push("<!--[-->");
            childrenProp($$renderer4, { selected, highlighted });
            $$renderer4.push(`<!---->`);
          } else {
            $$renderer4.push("<!--[!-->");
            $$renderer4.push(`${escape_html(label || value)}`);
          }
          $$renderer4.push(`<!--]-->`);
        };
        Select_item$1($$renderer3, spread_props([
          {
            value,
            "data-slot": "select-item",
            class: cn("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground outline-hidden *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className)
          },
          restProps,
          {
            get ref() {
              return ref;
            },
            set ref($$value) {
              ref = $$value;
              $$settled = false;
            },
            children,
            $$slots: { default: true }
          }
        ]));
      }
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Select_scroll_up_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Select_scroll_up_button$1($$renderer3, spread_props([
        {
          "data-slot": "select-scroll-up-button",
          class: cn("flex cursor-default items-center justify-center py-1", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            Chevron_up($$renderer4, { class: "size-4" });
          },
          $$slots: { default: true }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Select_scroll_down_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Select_scroll_down_button$1($$renderer3, spread_props([
        {
          "data-slot": "select-scroll-down-button",
          class: cn("flex cursor-default items-center justify-center py-1", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            Chevron_down($$renderer4, { class: "size-4" });
          },
          $$slots: { default: true }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Select_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      sideOffset = 4,
      portalProps,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Portal($$renderer3, spread_props([
        portalProps,
        {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Select_content$1($$renderer4, spread_props([
              {
                sideOffset,
                "data-slot": "select-content",
                class: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 max-h-(--bits-select-content-available-height) origin-(--bits-select-content-transform-origin) relative z-50 min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className)
              },
              restProps,
              {
                get ref() {
                  return ref;
                },
                set ref($$value) {
                  ref = $$value;
                  $$settled = false;
                },
                children: ($$renderer5) => {
                  Select_scroll_up_button($$renderer5, {});
                  $$renderer5.push(`<!----> <!---->`);
                  Select_viewport($$renderer5, {
                    class: cn("h-(--bits-select-anchor-height) min-w-(--bits-select-anchor-width) w-full scroll-my-1 p-1"),
                    children: ($$renderer6) => {
                      children?.($$renderer6);
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Select_scroll_down_button($$renderer5, {});
                  $$renderer5.push(`<!---->`);
                },
                $$slots: { default: true }
              }
            ]));
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Select_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      size: size2 = "default",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Select_trigger$1($$renderer3, spread_props([
        {
          "data-slot": "select-trigger",
          "data-size": size2,
          class: cn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 shadow-xs flex w-fit select-none items-center justify-between gap-2 whitespace-nowrap rounded-md border bg-transparent px-3 py-2 text-sm outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            children?.($$renderer4);
            $$renderer4.push(`<!----> `);
            Chevron_down($$renderer4, { class: "size-4 opacity-50" });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
const Root$1 = Select;
function SelectComp($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = void 0, items, name } = $$props;
    function getItemNameById(items2, value2) {
      const item = items2.find((i) => i.value === value2);
      return item ? item.name : null;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root$1($$renderer3, {
        type: "single",
        name,
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Select_trigger($$renderer4, {
            class: "w-full capitalize active:border-primary",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(value === "" ? "Select " + name.replace(/([a-z])([A-Z])/g, "$1 $2") : typeof value === "number" ? getItemNameById(items, value) : value)}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Select_content($$renderer4, {
            class: `w-full p-0 bg-transparent text-white ${stringify(glass)}`,
            children: ($$renderer5) => {
              $$renderer5.push(`<!--[-->`);
              const each_array = ensure_array_like(items);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let item = each_array[$$index];
                $$renderer5.push(`<!---->`);
                Select_item($$renderer5, {
                  value: item.value,
                  class: selectItem,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(item.name)}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              }
              $$renderer5.push(`<!--]-->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { value });
  });
}
function Command($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      api = null,
      ref = null,
      value = "",
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Command$1($$renderer3, spread_props([
        {
          "data-slot": "command",
          class: cn("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className)
        },
        restProps,
        {
          get value() {
            return value;
          },
          set value($$value) {
            value = $$value;
            $$settled = false;
          },
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { api, ref, value });
  });
}
function Command_empty($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Command_empty$1($$renderer3, spread_props([
        {
          "data-slot": "command-empty",
          class: cn("py-6 text-center text-sm", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Command_group($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      heading,
      value,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Command_group$1($$renderer3, spread_props([
        {
          "data-slot": "command-group",
          class: cn("text-foreground overflow-hidden p-1", className),
          value: value ?? heading ?? `----${useId()}`
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          children: ($$renderer4) => {
            if (heading) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<!---->`);
              Command_group_heading($$renderer4, {
                class: "text-muted-foreground px-2 py-1.5 text-xs font-medium",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(heading)}`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--> <!---->`);
            Command_group_items($$renderer4, { children });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Command_item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Command_item$1($$renderer3, spread_props([
        {
          "data-slot": "command-item",
          class: cn("aria-selected:bg-accent aria-selected:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground outline-hidden relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Command_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      value = "",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex h-9 items-center gap-2 border-b pl-3 pr-8" data-slot="command-input-wrapper">`);
      Search($$renderer3, { class: "size-4 shrink-0 opacity-50" });
      $$renderer3.push(`<!----> <!---->`);
      Command_input$1($$renderer3, spread_props([
        {
          "data-slot": "command-input",
          class: cn("placeholder:text-muted-foreground outline-hidden flex h-10 w-full rounded-md bg-transparent py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          get value() {
            return value;
          },
          set value($$value) {
            value = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref, value });
  });
}
function Command_list($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Command_list$1($$renderer3, spread_props([
        {
          "data-slot": "command-list",
          class: cn("max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden", className)
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Popover_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      sideOffset = 4,
      align = "center",
      portalProps,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Portal($$renderer3, spread_props([
        portalProps,
        {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Popover_content$1($$renderer4, spread_props([
              {
                "data-slot": "popover-content",
                sideOffset,
                align,
                class: cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--bits-popover-content-transform-origin) outline-hidden z-50 w-72 rounded-md border p-4 shadow-md", className)
              },
              restProps,
              {
                get ref() {
                  return ref;
                },
                set ref($$value) {
                  ref = $$value;
                  $$settled = false;
                }
              }
            ]));
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Popover_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Popover_trigger$1($$renderer3, spread_props([
        { "data-slot": "popover-trigger", class: cn("", className) },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
const Root = Popover;
function ComboBox($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { items, name, value = void 0 } = $$props;
    let open = false;
    let triggerRef = null;
    const selectedValue = items.find((f) => f.value === value)?.name;
    function closeAndFocusTrigger() {
      open = false;
      tick().then(() => {
        triggerRef.focus();
      });
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          {
            let child = function($$renderer5, { props }) {
              Button($$renderer5, spread_props([
                props,
                {
                  variant: "outline",
                  class: "w-full justify-between capitalize",
                  role: "combobox",
                  "aria-expanded": open,
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(selectedValue ? selectedValue : "Select " + name.replace(/([a-z0-9])([A-Z])/g, "$1 $2") + "...")} `);
                    Chevrons_up_down($$renderer6, { class: "opacity-50" });
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                }
              ]));
            };
            Popover_trigger($$renderer4, {
              get ref() {
                return triggerRef;
              },
              set ref($$value) {
                triggerRef = $$value;
                $$settled = false;
              },
              child,
              $$slots: { child: true }
            });
          }
          $$renderer4.push(`<!----> <input type="hidden"${attr("value", value)}${attr("name", name)}/> <!---->`);
          Popover_content($$renderer4, {
            class: `w-full p-0 bg-transparent text-white ${stringify(glass)}`,
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Command($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Command_input($$renderer6, {
                    placeholder: `Search ${stringify(name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/\b\w/g, (char) => char.toUpperCase()))}...`
                  });
                  $$renderer6.push(`<!----> <!---->`);
                  Command_list($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->`);
                      Command_empty($$renderer7, {
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!---->No ${escape_html(name.replace(/([a-z])([A-Z])/g, "$1 $2"))} found.`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!----> <!---->`);
                      Command_group($$renderer7, {
                        class: `w-full p-0 bg-transparent text-white ${stringify(glass)}`,
                        children: ($$renderer8) => {
                          $$renderer8.push(`<!--[-->`);
                          const each_array = ensure_array_like(items);
                          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                            let item = each_array[$$index];
                            $$renderer8.push(`<!---->`);
                            Command_item($$renderer8, {
                              value: item.name,
                              keywords: [item.name],
                              onSelect: () => {
                                value = item.value;
                                closeAndFocusTrigger();
                              },
                              class: `w-full p-0 bg-transparent text-white ${stringify(glass)} ${stringify(selectItem)}`,
                              children: ($$renderer9) => {
                                Check($$renderer9, { class: cn(value !== item.value && "text-transparent") });
                                $$renderer9.push(`<!----> ${escape_html(item.name)}`);
                              },
                              $$slots: { default: true }
                            });
                            $$renderer8.push(`<!---->`);
                          }
                          $$renderer8.push(`<!--]-->`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer7.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { value });
  });
}

export { Arrow_left as A, ComboBox as C, Label as L, SelectComp as S, Check as a };
//# sourceMappingURL=ComboBox-DPurYtB2.js.map
