<template>
	<img :src="images[imageName].img1920" :srcset="srcset" :sizes="sizes" :alt="alt" loading="lazy" v-bind="$attrs" class="responsive-image" />
</template>

<script setup lang="ts">
	defineOptions({ inheritAttrs: false });

	import { defineProps, computed } from "vue";

	const props = defineProps({
		alt: { type: String, required: true },
		imageName: { type: String, required: true },
	});

	const allImages = import.meta.glob("../assets/img/*.{jpg,png}", { eager: true, import: "default" });

	const images = Object.entries(allImages).reduce((acc, [path, src]) => {
		const matches = path.match(/(img|grid)(\d+)-(\d+)\.(jpg|png)$/);
		if (matches) {
			const name = `${matches[1]}${matches[2]}`; // img01 o grid01
			if (!acc[name]) acc[name] = {};
			acc[name][`img${matches[3]}`] = src;
		}
		return acc;
	}, {} as Record<string, Record<string, string>>);

	const srcset = computed(() => {
		const img = images[props.imageName];
		return `${img.img768} 768w, ${img.img1200} 1200w, ${img.img1920} 1920w`;
	});

	const sizes = "(max-width: 600px) 768px, (max-width: 1200px) 1200px, 1920px";
</script>

<style scoped>
	.responsive-image {
		width: 100%;
		height: auto;
		display: block;
	}
</style>
