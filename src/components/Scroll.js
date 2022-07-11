import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers"

const Scroll =(props) => {
    return (
        <div style={{overflowY: 'scroll', border :'5px solid black', height:'800px' }}>
            {props.children}
        </div>
    )
 }

 export default Scroll