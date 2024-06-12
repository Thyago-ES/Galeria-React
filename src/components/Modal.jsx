import styles from "./Modal.module.css";

export function Modal({ urlActive, handleModal }) {
	const closeModal = () => {
		handleModal("close");
	};

	const handleBackgroundClick = (e) => {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	};

	return (
		<div className={styles.background} onClick={handleBackgroundClick}>
			<button className={styles.closeButton} onClick={closeModal}>
				X
			</button>
			<div className={styles.imageContainer}>
				<img src={urlActive} />
			</div>
		</div>
	);
}
