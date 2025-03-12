// 'use client';

// import { useForm, useFieldArray } from 'react-hook-form';
// import { extractFieldValues } from '@/utils/extract-field-values';

// type FormValues = {
//   test: { firstName: string }[];
//   another: string;
// };

// export default function DynamicForm() {
//   const { register, control, handleSubmit } = useForm<FormValues>({
//     defaultValues: { test: [{ firstName: '' }] }, // Initial input
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: 'test', // Matches the field name pattern
//   });

//   const onSubmit = (data: FormValues) => {
//     console.log(extractFieldValues(data.test, 'firstName'));
//     // console.log(JSON.stringify(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {fields.map((field, index) => (
//         <div key={field.id}>
//           <div>
//             <input {...register(`test.${index}.firstName`)} placeholder="First Name" />
//             <button type="button" onClick={() => remove(index)}>
//               Remove
//             </button>
//           </div>
//           <button type="button" onClick={() => append({ firstName: '' })}>
//             Add Field
//           </button>
//         </div>
//       ))}
//       <div>
//         <input {...register('another')} placeholder="hello hello" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
