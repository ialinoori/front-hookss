const routerPush = (router) => {
    routerPush.push(
        {
            path: router.pathname,
            query: router.query,
        },
        undefined,
        {
            scroll:false
        }
    )
} 

export default routerPush;