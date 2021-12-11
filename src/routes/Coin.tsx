import {useParams} from "react-router";

// interface RouteParams {
// 	coinId: string;
// }
// function Coin() {
// 	const { coinId } = useParams<keyof RouteParams>() as RouteParams;
// 	return <h1>Coin: {coinId}</h1>;
// }
// 어떤 params가 들어오던 다 string이기에 지정을 안해줘도 에러가 안뜨나?

function Coin() {
	const {coinId} = useParams();
	return <h1>Coin: {coinId}</h1>
}

export default Coin;