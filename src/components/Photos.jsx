export function Photos({ images, handleModal }) {
	return (
		<>
			{images.map((image) => (
				<figure key={image.id}>
					<img src={image.url} onClick={() => handleModal("open", image.url)} />
				</figure>
			))}
		</>
	);
}
