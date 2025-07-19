<template>
	<section class="gallery-grid">
		<div class="gallery-grid__title">SHOP THE COLLECTION</div>

		<div class="gallery-grid__container">
			<div v-for="(imgName, index) in images" :key="index" class="gallery-grid__item">
				<ResponsiveImage :imageName="imgName" :alt="`Imagen galería ${index + 1}`" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import ResponsiveImage from "./ResponsiveImage.vue";
	import { onMounted, nextTick } from "vue";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		nextTick(() => {
			gsap.from(".gallery-grid__item", {
				scrollTrigger: {
					trigger: ".gallery-grid__container",
					start: "top 80%",
				},
				opacity: 0,
				y: 30,
				stagger: 0.1,
				duration: 1,
				ease: "power2.out",
			});
		});
	});

	const props = defineProps<{
		images: string[];
	}>();
</script>

<style scoped lang="scss">
	.gallery-grid__title {
		text-align: center;
		margin-left: -20px;
		font-weight: 400;
		font-size: 28px;
		line-height: 1;
		letter-spacing: 2.24px;
	}
	.gallery-grid {
		padding-left: 169.06px;
		padding-right: 145px;
		box-sizing: border-box;
		&__container {
			padding-top: 102px;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(306.16px, 1fr));
		}

		&__item {
			width: 306.16px;
			height: 458.11px;
			margin-bottom: 14.67px;

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: transform 0.4s ease;

				&:hover {
					transform: scale(1.05) translateY(-5px);
				}
			}
		}

		@media (max-width: 1200px) {
			padding-left: 40px;
			padding-right: 40px;

			&__item {
				width: 100%;
				height: auto;

				img {
					height: auto;
				}
			}
		}

		@media (max-width: 768px) {
			&__container {
				grid-template-columns: repeat(2, 1fr);
			}
		}

		@media (max-width: 400px) {
			&__container {
				grid-template-columns: 1fr;
			}
		}
	}
</style>
