import styled from "styled-components";

const PriceContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 8px;
`;

const PriceBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	border-radius: 10px;
	background-color: ${(props) => props.theme.boxColor};
	border: 1px solid ${props => props.theme.textColor};
	color: ${(props) => props.theme.textColor};
	font-weight:500;
`;

const PriceVelue = styled.span<{ isPositive?: Boolean }>`
	font-size: 20px;
	font-weight: 600;
	color: ${(props) => (props.isPositive ? "#01B746" : "#EE403C")};
`;

interface PriceData {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	circulating_supply: number;
	total_supply: number;
	max_supply: number;
	beta_value: number;
	first_data_at: string;
	last_updated: string;
	quotes: {
		USD: {
			ath_date: string;
			ath_price: number;
			market_cap: number;
			market_cap_change_24h: number;
			percent_change_1h: number;
			percent_change_1y: number;
			percent_change_6h: number;
			percent_change_7d: number;
			percent_change_12h: number;
			percent_change_15m: number;
			percent_change_24h: number;
			percent_change_30d: number;
			percent_change_30m: number;
			percent_from_price_ath: number;
			price: number;
			volume_24h: number;
			volume_24h_change_24h: number;
		};
	};
}

interface PriceProps {
	tickersData?: PriceData;
}

function checkBoolean(value: number | undefined) {
	if (value) {
		return value > 0;
	}
}

function Price({ tickersData }: PriceProps) {
	return (
		<PriceContainer>
			<PriceBox>
				<span>Price : </span>
				<PriceVelue isPositive={true}>
					{tickersData?.quotes.USD.price.toFixed(4)}
				</PriceVelue>
			</PriceBox>
			<PriceBox>
				<span>Market Cap Change 24h : </span>
				<PriceVelue isPositive={checkBoolean(tickersData?.quotes.USD.market_cap_change_24h)}>
					{`${tickersData?.quotes.USD.market_cap_change_24h} %`}
				</PriceVelue>
			</PriceBox>
			<PriceBox>
				<span>Change rate (last 30 Minutes) : </span>
				<PriceVelue isPositive={checkBoolean(tickersData?.quotes.USD.percent_change_30m)}>
					{`${tickersData?.quotes.USD.percent_change_30m} %`}
				</PriceVelue>
			</PriceBox>
			<PriceBox>
				<span>Change rate (last 1 hours) : </span>
				<PriceVelue isPositive={checkBoolean(tickersData?.quotes.USD.percent_change_1h)}>
					{`${tickersData?.quotes.USD.percent_change_1h} %`}
				</PriceVelue>
			</PriceBox>
			<PriceBox>
				<span>Change rate (last 12 hours) : </span>
				<PriceVelue isPositive={checkBoolean(tickersData?.quotes.USD.percent_change_12h)}>
					{`${tickersData?.quotes.USD.percent_change_12h} %`}
				</PriceVelue>
			</PriceBox>
			<PriceBox>
				<span>Change rate (last 24 hours) : </span>
				<PriceVelue isPositive={checkBoolean(tickersData?.quotes.USD.percent_change_24h)}>
					{`${tickersData?.quotes.USD.percent_change_24h} %`}
				</PriceVelue>
			</PriceBox>
		</PriceContainer>
	);
}

export default Price;