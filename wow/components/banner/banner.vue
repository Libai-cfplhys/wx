<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="bg-red"></view>
			</swiper-item>
			<swiper-item>
				<view class="bg-blue"></view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.bg-red{
		width: 100%;
		height: 100%;
	}
	.bg-blue{
		width: 100%;
		height: 100%;
	}
</style>
