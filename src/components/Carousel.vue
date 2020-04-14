<template>
	<div class="slider-wrapper">
		<transition-group class="slider-content" tag="section">
			<section
				v-for="slide in slides"
				class="slide"
				:key="slide.id"
				v-show="currentSlide === slide.id"
			>
				<section class="inner">
					<section class="top-bar">
						<button class="previousButton" @click="previous"></button>

						<p>{{ slide.description }}</p>

						<button class="nextButton" @click="next"></button>
					</section>
					<img class="slide-img" :src="slide.image" :alt="slide.description" />
				</section>
			</section>
		</transition-group>
	</div>
</template>
<script>
import Background1 from "../assets/images/reach-out.jpg";
import Background2 from "../assets/images/tents.jpg";
import Background3 from "../assets/images/children-of-war.jpg";
import Background4 from "../assets/images/girl.jpg";

export default {
	name: "Carousel",
	data() {
		return {
			currentSlide: 1,
			slides: [
				{
					id: 1,
					image: Background1,
					description:
						"Refugees are humans first. They deserve a life of dignity.",
				},
				{
					id: 2,
					image: Background2,
					description:
						"According to a report from the United Nations High Commissioner for Refugees, the number of people forcibly displaced due to war, persecution, and conflict exceeded 70 million in 2018.",
				},
				{
					id: 3,
					image: Background3,
					description:
						"Unable to return to safe, dignified conditions at home, 78% of refugees find themselves in protracted refugee situations where they have been displaced for at least 5 consecutive years.",
				},
				{
					id: 4,
					image: Background4,
					description:
						"Children constitute about half of the refugee population. Many of these children are unaccompanied making them more susceptible to exploitation and abuse.",
				},
			],
		};
	},
	methods: {
		next() {
			const first = this.slides.shift();
			this.slides = this.slides.concat(first);
			if (this.currentSlide !== 4) {
				this.currentSlide++;
			} else {
				this.currentSlide = 1;
			}
		},
		previous() {
			const last = this.slides.pop();
			this.slides = [last].concat(this.slides);
			if (this.currentSlide !== 1) {
				this.currentSlide--;
			} else {
				this.currentSlide = 4;
			}
		},
	},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Special+Elite&display=swap");

.slider-wrapper {
	position: relative;
	overflow: hidden;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
	background: black;
	border: 1px solid pink;
	max-width: 800px;
}

.slider-content .slide {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
}

.slider-content .slide .inner {
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.6);
	padding: 0;
	box-sizing: border-box;
	width: 100%;
}

.slider-content .slide .inner .top-bar {
	padding: 2.5%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 25vh;
	border-bottom: 1px solid white;
}

button::-moz-focus-inner {
	border: 0;
}

.slider-content .slide .inner .top-bar .previousButton,
.nextButton {
	z-index: 10;
	background: url("../assets/images/arrow.png") no-repeat center center / 32px;
	width: 32px;
	height: 32px;
	cursor: pointer;
	border: none;
}

.slider-content .slide .inner .top-bar .previousButton:hover,
.nextButton:hover {
	opacity: 0.5;
}

.slider-content .slide .inner .top-bar .previousButton {
	left: 20px;
	transform: rotateY(180deg);
}

.slider-content .slide .inner .top-bar .nextButton {
	right: 20px;
}
.slider-content .slide .inner .top-bar p {
	font-family: "Special Elite";
	color: #ffffff;
	font-size: 14px;
	line-height: 1.5;
	width: 70%;
	padding: 2.5%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	text-align: justify;
}
.slider-content .slide .inner .slide-img {
	width: 100%;
	height: auto;
	border-bottom: 1px solid white;
}

/* Mobile Landscape */
@media only screen and (min-width: 576px) {
}

/* Tablet Portrait */
@media only screen and (min-width: 768px) {
}

/* Tablet Landscape */
@media only screen and (min-width: 992px) {
}

/* Desktop */
@media only screen and (min-width: 1200px) {
}
</style>
