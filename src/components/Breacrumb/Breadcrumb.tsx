
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <React.Fragment>
            {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
        </React.Fragment>
    )
}

export default Breadcrumb
