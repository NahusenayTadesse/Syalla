
import { z } from 'zod';

export const fullSchema = z.object({
    step: z
        .number(),
    fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
    email: z.email({ message: 'Please enter a valid email address' }),
    phone: z.string().min(1, { message: 'Phone is required' }),
    companyName: z.string().min(1, { message: 'Company name is required' }),
    gpu: z.string().min(1, { message: 'GPU selection is required' }),
    pricing: z.string().min(1, { message: 'Pricing selection is required' }),
    hours: z.coerce.number().min(1, { message: 'Hours must be at least 1' }).optional(),
    notes: z.string().min(1, { message: 'Notes are required' })
});

export type FullSchema = z.infer<typeof fullSchema>;