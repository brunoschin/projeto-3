
export default function Thumb(props) {
	return (
		<div className="thumb">
			<img src={props.thumb} alt={props.external} />
			<p className="name">{props.external}</p>
			<p className="price">US$ {props.cheapest}</p>
		</div>
	)
}