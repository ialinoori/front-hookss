import Pagination from '@mui/material/Pagination';
import { useRouter } from "next/router";

const PaginationComponent = ({page,totalPages}) => {
    const router = useRouter();
    const pageHandler = (e,page) => {
        router.query.page = page;
        router.push(router)
    
    
      }
    return (
        <div className=" col-span-6 flex justify-center" dir="ltr">
        {
           totalPages >1 && (
             <Pagination count={totalPages} page={page} color="primary"  onChange={pageHandler}/>
           )
        }
       

       </div>
    );
};

export default PaginationComponent;