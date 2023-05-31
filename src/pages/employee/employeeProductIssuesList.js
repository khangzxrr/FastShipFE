import { useDispatch } from "react-redux"
import EmployeeProductIssueList from "../../component/orders-employee/employeeProductIssueList"
import Menu from "../../component/orders-employee/Menu"
import { useEffect, useState } from "react"
import { employeeGetProductIssuesAction } from "../../features/employeeGetProductIssues/employeeGetProductIssuesAction"

const EmployeeProductIssues = () =>{

    const [productIssues, setProductIssues] = useState([])
    const [total, setTotal] = useState(0)

    const dispatch = useDispatch()

    function getProductIssuesByPage(pageIndex = 1) {
        dispatch(employeeGetProductIssuesAction(0)).then(response => {
            setProductIssues(response.records)
            setTotal(response.totalCount)

            console.log(productIssues)
        })
    }

    useEffect(() => {
        getProductIssuesByPage()
    }, [])

    return(
        <div>
            <Menu/>
            <EmployeeProductIssueList getProductIssuesByPage={getProductIssuesByPage} productIssues={productIssues} total={total}/>
        </div>
    )
}
export default EmployeeProductIssues