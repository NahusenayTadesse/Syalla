import { z } from "zod";

// --- Plan Constants for Validation (Optional but Recommended) ---
// Using .enum is great for radio button or select inputs
export const RackPlan = z.enum(["Starter", "Pro", "Enterprise"]);

export const GpuType = z.enum([
    "RTX 4090",
    "A10",
    "A100_40GB", // Renamed for clarity in code
    "A100_80GB",
    "H100"
]);

export const WorkloadDuration = z.enum([
    "1_week",
    "1_month",
    "3_months",
    "6_months",
    "1_year",
    "Ongoing/Unsure"
]);

// ----------------------------------------------------------------------

/**
 * Step 1: Customer Contact Information
 */
export const schemaStep1 = z.object({
    // Full Name: Required, minimum 2 characters
    fullName: z.string().min(2, "Full Name is required."),

    // Company Name: Optional, but if provided, must be at least 2 chars
    companyName: z.string().min(2).optional(),

    // Email Address: Required, must be a valid email format
    email: z.email("A valid email address is required."),

    // Phone Number: Optional, allows any string but can add specific regex for phone number validation if needed
    phone: z.string().optional(),
});

// ----------------------------------------------------------------------

/**
 * Step 2: Co-location Rack Plan Selection
 */
export const schemaStep2 = z.object({
    // GPU: Must be one of the defined options
    gpu: z.string().min(1, "GPU is required."),
    pricing: z.string().min(1, "Package is required."),
    hours: z.number().int().min(1, "Hours per day must be at least 1.").max(24, "Hours per day cannot exceed 24."),

    // Brief Description: Required ONLY if 'Enterprise' is selected
});

export const schemaStep3 = z.object({
    // Additional Notes/Comments: Optional, up to a reasonable max length (e.g., 500 chars)
    notes: z.string().max(500, "Notes cannot exceed 500 characters.").optional(),

});