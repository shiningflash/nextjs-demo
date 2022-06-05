import { useRouter } from "next/router";

function Doc() {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);

    return <h1>{params.toString()}</h1>;
}

export default Doc;