<template>
	<section class="intro-section">
		<div class="texts-container">
			<h1 class="intro-text intro-text__title">ZARA ORIGINS</h1>
			<p class="intro-text intro-text__second">
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
			<p class="intro-text intro-text__third">Inspired by Vivaldi’s Four Seasons</p>
		</div>

		<figure class="image-container">
			<ResponsiveImage imageName="img01" alt="ZARA Origins Collection by Jamie Hakesworth" />
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
		<article class="half-image-section__text">
			<h2 class="half-image-section__title slow-show">ZARA ORIGINS</h2>
			<h3 class="half-image-section__subtitle slow-show">#Permanent Collection</h3>
			<p class="half-image-section__description slow-show">Zara Origins is a project focused upon building a contemporary wardrobe. The aim is to conceive, create and offer garments which are newly-refined archetypes of their kind, fabricated in the finest materials, and manufactured with high standards of expertise and craft. It harnesses progressive desing to combine modern concepts with outstanding valve.</p>
		</article>
	</section>

	<section class="half-carousel-section">
		<ScrollCarousel :images="carouselImages" height="792px" @ready="refreshScroll" />
	</section>

	<section class="double-image-section">
		<figure class="image-block split-show">
			<ResponsiveImage imageName="img09" alt="ZARA Origins editorial image" />
			<figcaption class="image-caption slow-show">When Zara Origins launched its first two collection for the winter and summer seasons, the constantly evoluing project was defined by thes statement. After two editions allowing for experimentation within the collection, the approach for the third editon has evolved naturally solidifying Zara Origins as a yearlong offering of wardrobe essentials that will be supplemented with limited edition seasonal piece.</figcaption>
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
		<GalleryGrid :images="galleryImages" v-show="true" @ready="refreshScroll" />
	</section>
</template>

<script setup lang="ts">
	import "@/assets/styles/pages/zara-origins.scss"
	import { onMounted, onBeforeUnmount, nextTick } from "vue"
	import ResponsiveImage from "../components/ResponsiveImage.vue"
	import ScrollCarousel from "../components/ScrollCarousel.vue"
	import GalleryGrid from "../components/GalleryGrid.vue"
	import { gsap } from "gsap"
	import { ScrollTrigger } from "gsap/ScrollTrigger"

	gsap.registerPlugin(ScrollTrigger)

	const carouselImages = [
		{ name: "img04", caption: "01 / 05" },
		{ name: "img05", caption: "02 / 05" },
		{ name: "img06", caption: "03 / 05" },
		{ name: "img07", caption: "04 / 05" },
		{ name: "img08", caption: "05 / 05" },
	]

	const carouselImagesBot = [
		{ name: "img12", caption: "01 / 05" },
		{
			name: "img13",
			caption: "02 / 05",
			text: "When Zara Origins launched its first two collection for the winter and summer seasons, the constantly evoluing project was defined by thes statement. After two editions allowing for experimentation within the collection, the approach for the third editon has evolved naturally solidifying Zara Origins as a yearlong offering of wardrobe essentials.<br /><br />When Zara Origins launched its first two collection for the winter and summer seasons, the constantly evoluing project was defined by thes statement. After two editions allowing for experimentation within the collection, the approach for the third editon has evolved naturally solidifying Zara Origins as a yearlong offering of wardrobe essentials.When Zara Origins launched its first two collection for the winter and summer seasons, the constantly evoluing project was defined by thes statement. After two editions allowing for experimentation within.",
		},
		{ name: "img14", caption: "03 / 05" },
		{ name: "img15", caption: "04 / 05" },
		{ name: "img16", caption: "05 / 05" },
	]

	const galleryImages = Array.from({ length: 25 }, (_, i) => `grid${String(i + 1).padStart(2, "0")}`)

	function refreshScroll() {
		setTimeout(() => {
			ScrollTrigger.refresh()
		}, 300)
	}

	function imagesLoaded() {
		return new Promise<void>((resolve) => {
			document.querySelectorAll("img").forEach((img) => {
				img.loading = "eager"
			})
			const images = document.querySelectorAll("img")
			let loadedCount = 0
			const totalImages = images.length


			if (totalImages === 0) {
				resolve()
				return
			}

			images.forEach((img) => {
				if (img.complete && img.naturalHeight !== 0) {
					loadedCount++
					if (loadedCount === totalImages) {
						resolve()
					}
				} else {
					img.addEventListener("load", () => {
						loadedCount++
						if (loadedCount === totalImages) {
							resolve()
						}
					})
					img.addEventListener("error", () => {
						loadedCount++
						if (loadedCount === totalImages) {
							resolve()
						}
					})
				}
			})
		})
	}

	function setupAnimations() {
		ScrollTrigger.getAll().forEach((t) => t.kill())

		const isMobile = window.innerWidth <= 768

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
		)

		gsap.utils.toArray(".split-show").forEach((el: any) => {
			const isReverse = el.closest(".reverse")
			const xOffset = isReverse ? 100 : -100

			gsap.fromTo(
				el,
				{ opacity: 0, transform: `translateX(${xOffset}px)` },
				{
					opacity: 1,
					transform: "translateX(0)",
					duration: 1.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: el,
						start: isMobile ? "top 90%" : "top 80%",
						toggleActions: "play none none reverse",
						invalidateOnRefresh: true,
					},
				}
			)
		})

		gsap.utils.toArray<HTMLElement>(".slow-show").forEach((el) => {
			gsap.set(el, { opacity: 0, y: 20, visibility: "hidden" })

			ScrollTrigger.create({
				trigger: el,
				start: window.innerWidth <= 768 ? "top 95%" : "top 85%",
				toggleActions: "play none none reverse",
				onEnter: () => {
					gsap.to(el, {
						opacity: 1,
						y: 0,
						visibility: "visible",
						duration: 1,
						ease: "power2.out",
					})
				},
				onLeaveBack: () => {
					gsap.to(el, {
						opacity: 0,
						y: 20,
						visibility: "hidden",
						duration: 0.5,
					})
				},
			})
		})

		ScrollTrigger.refresh(true)
	}

	function onResize() {
		ScrollTrigger.refresh()
	}

	onMounted(() => {
			nextTick(() => {
				requestAnimationFrame(() => {
					imagesLoaded().then(() => {
						setupAnimations()
					})
				})
		})
		window.addEventListener("resize", onResize)
	})

	onBeforeUnmount(() => {
		window.removeEventListener("resize", onResize)
		ScrollTrigger.getAll().forEach((t) => t.kill())
		gsap.globalTimeline.clear()
		ScrollTrigger.clearMatchMedia()
	})
</script>
