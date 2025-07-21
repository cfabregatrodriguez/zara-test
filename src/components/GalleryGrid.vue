<template>
	<section class="gallery-grid">
		<div class="gallery-grid__title">SHOP THE COLLECTION</div>

		<div class="gallery-grid__container">
			<div v-for="(imgName, index) in images" :key="index" class="gallery-grid__item">
				<ResponsiveImage :imageName="imgName" :alt="`Imagen galería ${index + 1}`" @load="checkImagesLoaded" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
	import ResponsiveImage from "./ResponsiveImage.vue";
	import { onMounted, nextTick, ref } from "vue";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	const props = defineProps<{
	images: string[];
	}>();

	const emit = defineEmits(["ready"]);
	const loadedImages = ref(0);
	const isMobile = window.innerWidth <= 768;

	function checkImagesLoaded() {
		loadedImages.value++;
		if (loadedImages.value === props.images.length) {
			nextTick(() => {
			requestAnimationFrame(() => {
				gsap.utils.toArray<HTMLElement>(".gallery-grid__item").forEach((el, i) => {
				gsap.from(el, {
					scrollTrigger: {
					trigger: el,
					start: isMobile ? "top 90%" : "top 80%",
					toggleActions: "play none none reverse",
					},
					opacity: 0,
					y: 30,
					duration: 0.8,
					ease: "power2.out",
					delay: i * 0.05,
				});
				});

				
				ScrollTrigger.refresh();

				emit("ready");
			});
			});
		}
	}

	onMounted(() => {
		if (props.images.length === 0) emit("ready");
	});
</script>


<style scoped lang="scss">
	
.gallery-grid__title {
  text-align: center;
  margin-left: -20px;
  font-weight: 400;
  font-size: $font-size-lg;
  line-height: 1;
  letter-spacing: 2.24px;
}

.gallery-grid {
  padding-left: 169.06px;
  padding-right: 145px;
  padding-bottom: 50px;
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
    cursor: pointer;

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

  @include respond(tablet) {
    padding-left: $spacing-md;
    padding-right: $spacing-md;

    &__container {
      grid-template-columns: repeat(3, 1fr);
    }
    &__item {
      width: 100%;
      height: auto;

      img {
        height: auto;
      }
    }
  }

  @include respond(mobile) {
    &__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @include respond(small-mobile) {
    &__container {
      grid-template-columns: 1fr;
    }
  }
}
</style>
