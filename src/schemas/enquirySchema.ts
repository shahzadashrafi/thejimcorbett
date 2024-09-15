import z from 'zod';

export const enquirySchema = z.object({
  name: z
    .string()
    .min(5, { message: "Name must have 6 characters" })
    .max(12, { message: "Name should not be more than 12 characters" })
    .regex(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/, "Name must have only Characters and whitespaces"),
  mobile: z.string().min(10, "Mobile Number should be 10 character long").regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, "Invalid Mobile Number"),
  email: z.string().email({ message: "Invalid Email Address" }),
  date: z.date()
});

