<template>
	<section class="intro-section">
		<div class="texts-container">
			<h1 class="intro-text intro-text--title">ZARA ORIGINS</h1>
			<p class="intro-text intro-text--second">
				Identity by MSM Paris
				<br />
				Photography by Jaime Hakesworth
				<br />
				Short movie directed by BYNT
				<br />
				Script by David Scearce
				<br />
				Produced by Canada
			</p>
			<p class="intro-text intro-text--third">Inspired by Vivaldi’s Four Seasons</p>
		</div>

		<figure class="image-container">
			<ResponsiveImage imageName="img01" class="split-show" alt="ZARA Origins Collection by Jamie Hakesworth" />
			<figcaption class="image-caption">
				Picture by Jamie Hakesworth
				<br />
				ZARA ORIGINS Collection
				<br />
				Tappei
			</figcaption>
		</figure>
	</section>

	<section class="full-width-image-section">
		<ResponsiveImage imageName="img02" alt="ZARA Origins full width" class="parallax-scale" />
	</section>

	<section class="half-image-section">
		<div class="half-image-section__image">
			<ResponsiveImage imageName="img03" alt="ZARA Origins garment close-up" class="split-show" />
		</div>
		<article class="half-image-section__text slow-show">
			<h2 class="half-image-section__title">ZARA ORIGINS</h2>
			<h3 class="half-image-section__subtitle">#Permanent Collection</h3>
			<p class="half-image-section__description">Zara Origins is a project focused upon building a contemporary wardrobe. The aim is to conceive, create and offer garments which are newly-refined archetypes of their kind, fabricated in the finest materials, and manufactured with high standards of expertise and craft. It harnesses progressive desing to combine modern concepts with outstanding valve.</p>
		</article>
	</section>

	<section class="half-carousel-section">
		<ScrollCarousel :images="carouselImages" height="792px" @ready="refreshScroll" />
	</section>

	<section class="double-image-section">
		<figure class="image-block split-show">
			<ResponsiveImage imageName="img09" alt="ZARA Origins editorial image" />
			<figcaption class="image-caption">When Zara Origins launched its first two collection for the winter and summer seasons, the constantly evoluing project was defined by thes statement. After two editions allowing for experimentation within the collection, the approach for the third editon has evolved naturally solidifying Zara Origins as a yearlong offering of wardrobe essentials that will be supplemented with limited edition seasonal piece.</figcaption>
		</figure>

		<div class="image-block no-caption split-show reverse">
			<ResponsiveImage imageName="img11" alt="ZARA Origins editorial image" />
		</div>
	</section>

	<section class="bot-carousel-section">
		<ScrollCarousel :images="carouselImagesBot" height="792.5px" @ready="refreshScroll" />
	</section>

	<section class="image-text-section split-show">
		<div class="image-text__image">
			<ResponsiveImage imageName="img19" alt="ZARA Origins campaign image" />
		</div>
		<article class="image-text__content left-align slow-show">
			When Zara Origins launched its first two collection for the winter and summer seasons, the constantly evoluing project was defined by thes statement. After two editions allowing for experimentation within the collection, the approach for the third editon has evolved naturally solidifying Zara Origins as a.
			<br />
			<br />
			When Zara Origins launched its first two collection for the winter and summer seasons, the constantly evoluing project was defined by thes statement. After two editions allowing for experimentation within the collection, the approach for the third editon has evolved naturally solidifying Zara Origins as a yearlong offering of wardrobe essentials.When Zara Origins .
		</article>
	</section>

	<section class="image-text-section reverse split-show">
		<div class="image-text__image">
			<ResponsiveImage imageName="img20" alt="ZARA Origins campaign image" />
		</div>
		<article class="image-text__content right-align slow-show">When Zara Origins launched its first two collection for the winter and summer seasons, the constantly evoluing project was defined by thes statement. After two editions allowing for experimentation within the collection, the approach for the third editon has evolved naturally solidifying Zara Origins as a.</article>
	</section>

	<section class="gallery-grid-section">
		<GalleryGrid :images="galleryImages" @ready="refreshScroll" />
	</section>
</template>

<script setup lang="ts">
	import { onMounted, onBeforeUnmount } from "vue";
	import ResponsiveImage from "../components/ResponsiveImage.vue";
	import ScrollCarousel from "../components/ScrollCarousel.vue";
	import GalleryGrid from "../components/GalleryGrid.vue";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	const carouselImages = [
		{ name: "img04", caption: "01 / 05" },
		{ name: "img05", caption: "02 / 05" },
		{ name: "img06", caption: "03 / 05" },
		{ name: "img07", caption: "04 / 05" },
		{ name: "img08", caption: "05 / 05" },
	];

	const carouselImagesBot = [
		{ name: "img12", caption: "01 / 05" },
		{ name: "img13", caption: "02 / 05" },
		{ name: "img14", caption: "03 / 05" },
		{ name: "img15", caption: "04 / 05" },
		{ name: "img16", caption: "05 / 05" },
	];

	const galleryImages = Array.from({ length: 25 }, (_, i) => `grid${String(i + 1).padStart(2, "0")}`);

	function refreshScroll() {
		setTimeout(() => {
			ScrollTrigger.refresh();
			console.log("ScrollTrigger refreshed after carousel ready");
		}, 100);
	}

	onMounted(() => {
		ScrollTrigger.getAll().forEach((t) => t.kill());

		const images = Array.from(document.images);
		let loadedCount = 0;

		const isMobile = window.innerWidth <= 768;

		gsap.fromTo(
			".parallax-scale",
			{ scale: 1.2 },
			{
				scale: 1,
				scrollTrigger: {
					trigger: ".parallax-scale",
					start: "top center",
					end: "center center",
					scrub: 1,
					invalidateOnRefresh: true,
				},
			}
		);

		gsap.utils.toArray(".split-show").forEach((el: any) => {
			const isReverse = el.closest(".reverse");
			const xOffset = isReverse ? 100 : -100;

			gsap.fromTo(
				el,
				{ opacity: 0, x: xOffset },
				{
					opacity: 1,
					x: 0,
					duration: 1.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: el,
						start: isMobile ? "top 90%" : "top 80%",
						toggleActions: "play none none reverse",
						invalidateOnRefresh: true,
					},
				}
			);
		});
	});
</script>

<style scoped lang="scss">
	h1,
	h2,
	h3 {
		font-weight: 400;
	}
	section {
		position: relative;
	}

	figure {
		margin: 0;
		display: block;
	}

	figcaption {
		margin: 0;
		padding: 0;
	}

	.intro-section {
		margin-top: 106.03px;
		display: flex;
		max-width: 100%;
		align-items: center;
		margin-left: 160px;
		margin-right: 225px;
		width: calc(100% - 386.33px);

		.texts-container {
			margin-top: 2px;
			display: flex;
			flex: 1 1 auto;
			justify-content: space-between;
			text-align: right;
			.intro-text {
				font-size: 12px;
				&--title {
					font-size: 13px;
					width: 70px;
					letter-spacing: 0;
					margin-right: 52px;
				}
				&--second {
					width: 183.05px;
					margin-right: 18px;
				}
				&--third {
					width: 120px;
				}
			}
		}

		.image-container {
			margin-left: 106.97px;
			flex-shrink: 1;
		}

		.image-caption {
			text-align: right;
			margin-top: 18px;
			margin-bottom: 0;
		}

		@media (max-width: 1200px) {
			width: 100%;
			margin-left: 0;
			margin-right: 0;
			flex-direction: column;

			.texts-container {
				justify-content: center;
				margin-bottom: 20px;

				.intro-text {
					font-size: 14px;
					text-align: center;
				}
			}

			.image-container {
				margin-left: 0;
				max-width: 100%;
			}
			.texts-container {
				flex-direction: column;
				text-align: center;
				.intro-text {
					&--title,
					&--second,
					&--third {
						width: 100%;
						margin-left: 0;
						margin-right: 0;
					}

					&--title {
						font-size: 16px;
					}
				}
			}
		}

		@media (max-width: 768px) {
			margin-top: 40px;
			margin-left: auto;
			margin-right: auto;
			width: calc(100% - 36px);

			.image-container {
				width: 100%;
			}
		}
	}

	.full-width-image-section {
		margin-top: 73px;
		max-width: 100%;
		overflow: hidden;
	}
	.parallax-scale {
		display: block;
		width: 100%;
		will-change: transform;
	}

	.half-image-section {
		max-width: 100%;
		display: flex;
		height: auto;
		margin-left: 18.38px;
		margin-top: 143.61px;
		align-items: flex-end;

		&__image {
			flex: 1;
			max-width: 875.48px;
		}

		&__text {
			background: #fff;
			flex-direction: column;
			justify-content: center;
			margin-left: 73px;
			width: 414.62px;
			margin-bottom: -5px;
		}
		&__title {
			margin-bottom: 12px;
		}

		&__subtitle {
			margin-bottom: 12px;
		}

		&__title,
		&__subtitle {
			font-size: 13px;
			letter-spacing: 0px;
			line-height: 100%;
		}
		&__description {
			margin-bottom: 0;
		}
		@media (max-width: 768px) {
			flex-direction: column;
			margin-left: 18px;
			margin-right: 18px;

			&__title {
				margin-top: 40px;
			}
			&__image,
			&__text {
				flex: unset;
				width: 100%;
			}
		}
	}

	.half-carousel-section {
		margin-top: 243.62px;
		@media (max-width: 768px) {
			margin-top: 125.98px;
		}
	}

	.double-image-section {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-left: 61px;
		margin-right: 97.43px;
		margin-top: 180px;
		gap: 73.06px;

		.image-block {
			display: flex;
			flex-direction: column;
			align-items: left;

			img {
				max-width: 100%;
				height: auto;
				display: block;
			}

			.image-caption {
				margin-top: 78px;
				font-size: 12px;
				text-align: left;
				width: 401.93px;
			}

			&.no-caption {
				.image-caption {
					display: none;
				}
			}
		}

		@media (max-width: 1200px) {
			flex-direction: column;
			gap: 120px;
			margin-top: 120px;
			margin-left: 18px;
			margin-right: 18px;
			.image-block {
				flex-direction: row;
				align-items: center;
				&.no-caption {
					width: 100%;
				}
			}

			.image-caption {
				margin-top: 0;
				font-size: 12px;
				width: 401.93px;
				margin-left: 73.09px;
			}
		}

		@media (max-width: 768px) {
			.image-block {
				display: block;
				.image-caption {
					width: 100%;
					margin-left: 0;
					margin-top: 40px;
				}
			}
		}
	}

	.bot-carousel-section {
		margin-top: 225.98px;
		@media (max-width: 768px) {
			margin-top: 125.98px;
		}
	}

	.image-text-section {
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		margin: 280.42px 0 0 47.41px;

		.image-text__image {
			width: 100%;
			max-width: 1162.91px;
			display: flex;
			justify-content: center;

			img {
				width: 100%;
				height: auto;
				object-fit: cover;
			}
		}

		.image-text__content {
			text-align: right;
			width: 395.13px;
			margin-left: 67.84px;
			margin-bottom: -4px;

			&.left-align {
				text-align: left;
				margin-right: 50px;
			}

			&.right-align {
				text-align: right;
			}
		}

		&.reverse {
			flex-direction: row-reverse;
			margin-right: 162.98px;
			margin-top: 327.68px;

			.image-text__image {
				width: 100%;
				max-width: 874.63px;
			}

			.image-text__content {
				width: 395.13px;
				margin-right: 65.37px;
			}
		}

		@media (max-width: 768px) {
			flex-direction: column;
			margin: 125.98px 0 0 0;

			&.image-text-section {
				flex-direction: column;
				margin-right: 18px;
				margin-left: 18px;
				&.reverse {
					margin-top: 106.42px;
				}
				.image-text__content {
					text-align: left;
					margin-top: 40px;
					width: 100%;
					margin-right: 0px;
					margin-left: 0px;
					margin-bottom: 0px;
				}
			}
		}
	}

	.gallery-grid-section {
		margin-top: 133.47px;
	}

	.split-show {
		opacity: 0;
	}
</style>
