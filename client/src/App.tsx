import { useState } from "react"
import ExpenseList from "./expense-tracker/components/ExpenseList"
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter"
import ExpenseForm from "./expense-tracker/components/ExpenseForm"
import categories from "./expense-tracker/categories"


// export const categories = ['Groceries', 'Utilities', 'Entertainment', 'Food', 'Shopping']

const App = () => {

// Create a UseState to help us handle our selectedCategories

const [selectedCategory, setSelectedCategory] = useState('')

const [dummyExpensesArray , setDummyExpensesArray] = useState([
  {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
  {id: 2, description: 'bbb', amount: 15, category: 'Entertainment'},
  {id: 3, description: 'ccc', amount: 20, category: 'Food'},
  {id: 4, description: 'ddd', amount: 25, category: 'Shopping'},
  {id: 5, description: 'eee', amount: 16, category: 'Groceries'}
])

const handleDelete = (id:number) => {
  setDummyExpensesArray(dummyExpensesArray.filter(expense => expense.id !== id))
}

// Create a variable with a ternary operator, we are going to use our selected category as a boolean filter through our dummyExpensesArray

const visibleExpense = selectedCategory ? dummyExpensesArray.filter(e => e.category === selectedCategory): dummyExpensesArray;
return (
  <>
    <h1 className="text-center">Expense Tracker</h1>
    <div className="m-5">
    <ExpenseForm addExpense={expense => setDummyExpensesArray([...dummyExpensesArray, {...expense, id: dummyExpensesArray.length + 1}])}/>
    </div>
    {/* <div className='m-5'>
    <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
    </div> */}
    <div className="m-5">
    <ExpenseList expenses={visibleExpense} onDelete={handleDelete}/>
    </div>
  </>
)
}

export default App