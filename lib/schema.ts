import { z } from 'zod';

// export const FormDataSchema = z.object({
//   name: z.string().nonempty('Name is required.'),
//   message: z
//     .string()
//     .nonempty('Message is required.')
//     .min(6, { message: 'Message must be at least 6 characters.' })
// });

export const FormDataSchema = z.object({
  name: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  message: z.string().min(6, { message: 'Must be 5 or more characters long' }),
  // activity: z.string().min(1, { message: 'You must select at least one activity' })
  activities: z.array(z.string())
});
