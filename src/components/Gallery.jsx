import { useState } from "react";

import { Modal } from "./Modal";
import { Photos } from "./Photos";

import styles from "./Gallery.module.css";

export function Gallery() {
	const [onModal, setOnModal] = useState(false);
	const [urlActive, setUrlActive] = useState("");

	const images = [
		{
			id: 1,
			url: "https://static.vecteezy.com/ti/fotos-gratis/t2/22575456-camomila-flor-campo-camomila-dentro-a-natureza-campo-do-camomiles-as-ensolarado-dia-as-natureza-camomila-margarida-flores-dentro-verao-dia-camomila-flores-campo-largo-fundo-dentro-sol-claro-generativo-ai-foto.jpg",
		},
		{
			id: 2,
			url: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
		},
		{
			id: 3,
			url: "https://st4.depositphotos.com/3835425/30122/i/450/depositphotos_301226934-stock-photo-amazing-nature-background-wallpaper.jpg",
		},
		{
			id: 4,
			url: "https://static.vecteezy.com/ti/fotos-gratis/p1/13951373-incrivel-paisagem-natural-bela-cena-com-picos-de-alta-montanha-tatra-pedras-no-lago-de-montanha-agua-calma-do-lago-reflexao-ceu-colorido-por-do-sol-fundo-de-natureza-incrivel-caminhadas-de-aventura-de-outono-foto.jpg",
		},
		{
			id: 5,
			url: "https://media.istockphoto.com/id/517188688/pt/foto/paisagem-de-montanha.jpg?s=612x612&w=0&k=20&c=uFGUrUT6gA8FrTWhE10YYzngWPlDLssKxJiDs1Qw2Qs=",
		},
		{
			id: 6,
			url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdXt4PDVrKFbJyNtQIn72Q7zDX-P-I0lSYw&s",
		},
	];

	const handleModal = (act, url) => {
		if (act === "open") {
			modalConfig(url, true);
		}

		if (act === "close") {
			modalConfig("", false);
		}
	};

	const modalConfig = (urlActive, onModal) => {
		setUrlActive(urlActive);
		setOnModal(onModal);
	};

	return (
		<main className={styles.container}>
			<div className={styles.gallery}>
				<Photos images={images} handleModal={handleModal} />
			</div>
			{onModal && <Modal urlActive={urlActive} handleModal={handleModal} />}
		</main>
	);
}
