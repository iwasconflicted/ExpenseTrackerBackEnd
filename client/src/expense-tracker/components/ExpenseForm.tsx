import categories from "../categories"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import {z} from "zod";

const schema = z.object({
    description: z.string().min(1, {message: 'Must have description'}),
    amount: z.number({invalid_type_error:"Amount Required"}),
    category: z.string().min(3,{message: "Category must be selected"}),
})

type FormData = z.infer<typeof schema>

interface expenseProps {
    addExpense: (data:FormData) => void;
}

const ExpenseForm = ({addExpense}:expenseProps) => {

    const {register, handleSubmit, formState:{errors}} = useForm<FormData>({resolver:zodResolver(schema)})
    console.log(errors)

    
    return (
        <>
            <form onSubmit={handleSubmit(addExpense)}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input {...register('description')} id='description' type="text" className="form-control" />
                    {errors.description && <p className="text-danger">{errors.description.message}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input {...register('amount', {valueAsNumber: true})} id='amount' type="number" className="form-control"/>
                    {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select {...register('category')} id='category' className="form-select"> 
                    {categories.map(category => <option key={category} value={category}>{category}</option>)}
                    </select>
                    {errors.category && <p className="text-danger">{errors.category.message}</p>}
                </div>
                <button className="btn btn-outline-primary">Add Expense</button>
            </form>
        </>
    )
}

export default ExpenseForm













































// import categories from "../categories";


// const ExpenseForm = () => {
//   return (
//     <>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="description" className="form-label">Description</label>
//           <input id="description" type="text" className="form-control" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="amount" className="form-label">Amount</label>
//           <input id="amount" type="number" className="form-control" />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="category" className="form-label">Category</label>
//           <select id="category" className="form-select">
//             <option value=""></option>
//             {categories.map(category => <option key={category} value={category}>{category}</option>)}

//           </select>
//         </div>

//         <button className="btn btn-outline-primary">Submit</button>
//       </form>
//     </>
//   );
// };

// export default ExpenseForm;
