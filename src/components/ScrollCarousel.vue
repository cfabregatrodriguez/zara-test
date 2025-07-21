<template>
	<section v-if="!isMobile" ref="container" class="scroll-wrapper">
		<div ref="carousel" class="horizontal-carousel">
			<div class="scroll-carousel__slide" v-for="(img, index) in images" :key="index" @click="scrollToImage(index)" :style="{ '--image-height': dynamicHeight }">
				<ResponsiveImage :imageName="img.name" :alt="`Imagen carrusel ${index + 1}`" />
				<p class="scroll-carousel__caption">{{ img.caption }}</p>
				<p v-if="img.text" class="scroll-carousel__text slow-show" v-html="img.text" />
			</div>
		</div>
	</section>

	<swiper
		v-else
		:slides-per-view="'auto'"
		:loop="true"
		:freemode="true"
		:pagination="{ clickable: true }"
		class="mobile-swiper"
		:style="{ '--image-height': dynamicHeight }"
  		:slide-to-clicked-slide="true"
		>
		<swiper-slide
			v-for="(img, index) in images"
			:key="index"
			class="scroll-carousel__slide"
		>
			<ResponsiveImage :imageName="img.name" :alt="`Imagen carrusel ${index + 1}`" />
			<p class="scroll-carousel__caption">{{ img.caption }}</p>
		</swiper-slide>
	</swiper>

	<div v-if="isMobile" v-for="(img, index) in images" :key="index">
		<p v-if="img.text" class="scroll-carousel__text slow-show" v-html="img.text" />
	</div>
</template>

<script setup lang="ts">
	import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
	import ResponsiveImage from "./ResponsiveImage.vue";
	import { Swiper, SwiperSlide } from "swiper/vue";
	import "swiper/css";
	import "swiper/css/pagination";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	const emit = defineEmits(["ready"]);

	const props = defineProps<{
	images: { name: string; caption: string; text: string }[];
	height: string;
	previewOffset?: number;
	}>();

	const container = ref<HTMLElement | null>(null);
	const carousel = ref<HTMLElement | null>(null);
	const dynamicHeight = ref(props.height);

	const isMobile = ref(false);
	
	let refreshTimeout: number | null = null;

	function updateDynamicHeight() {
		if (isMobile.value) {
			const swiperSlides = Array.from(document.querySelectorAll(".mobile-swiper img")) as HTMLImageElement[];
			let minHeight = parseInt(props.height);

			swiperSlides.forEach((img) => {
			const naturalWidth = img.naturalWidth;
			const naturalHeight = img.naturalHeight;

			const scaledHeight = ((window.innerWidth * 0.8) / naturalWidth) * naturalHeight;

			if (scaledHeight < minHeight) {
				minHeight = scaledHeight;
			}
			});

			dynamicHeight.value = `${minHeight}px`;
		} else {
			if (!carousel.value) return;

			const viewportWidth = window.innerWidth * 0.8;
			let maxHeight = parseInt(props.height);

			const slides = Array.from(carousel.value.querySelectorAll("img")) as HTMLImageElement[];

			slides.forEach((img) => {
			const naturalWidth = img.naturalWidth;
			const naturalHeight = img.naturalHeight;

			const scaledHeight = (viewportWidth / naturalWidth) * naturalHeight;

			if (scaledHeight < maxHeight) {
				maxHeight = scaledHeight;
			}
			});

			dynamicHeight.value = `${maxHeight}px`;
		}

		if (refreshTimeout) clearTimeout(refreshTimeout);
			refreshTimeout = window.setTimeout(() => {
				ScrollTrigger.refresh();
		}, 100);
	}

	function scrollToImage(index: number) {
	if (!carousel.value) return;

	const slides = Array.from(carousel.value.children) as HTMLElement[];
	const targetSlide = slides[index];

	const previewOffset = props.previewOffset ?? 50;

	if (targetSlide) {
		let targetPosition = targetSlide.offsetLeft - previewOffset;

		if (index === 0 || targetPosition < 0) {
		targetPosition = 0;
		}

		carousel.value.scrollTo({
		left: targetPosition,
		behavior: "smooth",
		});
	}
	}

	function checkIsMobile() {
	isMobile.value = window.innerWidth <= 768;
	}

	let resizeTimeout: number | null = null;

	function onResize() {
		checkIsMobile();
		updateDynamicHeight();
	}

	onMounted(() => {
		window.addEventListener("resize", () => {
			if (resizeTimeout) clearTimeout(resizeTimeout);
			resizeTimeout = window.setTimeout(() => {
				onResize();
			}, 150);
		});

		window.addEventListener("focus", () => {
			onResize();
		});

		window.addEventListener("orientationchange", () => {
			onResize();
		});

		onResize();

		nextTick(() => {
			setTimeout(() => {
			emit("ready");
			}, 200);
		});
	});

	onBeforeUnmount(() => {
	window.removeEventListener("resize", onResize);
	window.removeEventListener("focus", onResize);
	window.removeEventListener("orientationchange", onResize);
	});
</script>


<style scoped lang="scss">
@use "@/assets/styles/variables" as *;
@use "@/assets/styles/mixins" as *;

.scroll-wrapper {
  margin-right: 0;
}

.horizontal-carousel {
  position: relative;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE y Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari y Opera */
  }
}

.swiper-slide {
  width: auto !important;
}

.mobile-swiper {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-drag: none;

  ::v-deep(.swiper-slide img) {
    height: var(--image-height);
    width: auto;
    object-fit: contain;
    max-width: 80vw;
    display: block;
  }
}

::v-deep(.swiper-wrapper) {
  transition-timing-function: ease-out !important;
}

::v-deep(.swiper-slide) {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.scroll-carousel__slide {
  flex: 0 0 auto;
  display: inline-flex;
  margin-right: 5px;
  flex-direction: column;
  scroll-snap-align: start;
  align-items: flex-start;
  cursor: pointer;

  img {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: var(--image-height);
    width: auto;
    object-fit: contain;
    display: block;
    max-width: 80vw;
    max-height: calc(80vw * (var(--image-height) / 100));
  }

  &:hover img {
    transform: scale(1.01);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  &:first-child {
    margin-left: 70px;

    @include respond(mobile) {
      margin-left: 0px;
    }
  }
}

.scroll-carousel__caption {
  margin-top: 21px;
  font-size: $font-base;
  text-align: right;
  width: 100%;
}

.scroll-carousel__text {
  width: 707.99px;
  max-width: 100%;
  margin-top: 27px;

  @include respond(mobile) {
    padding: 0 $spacing-mobile;
	width: auto;
  }
}
</style>
