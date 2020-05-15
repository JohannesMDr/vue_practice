<template>
<v-navigation-drawe absolute temporary>
	<v-list>
		<v-list-item>
			<v-list-item-avatar>
				<img v-if="photoURL" :src="photoURL">
			</v-list-item-avatar>
			<v-list-item-content>
				<v-list-item-title>{{ userName }}</v-list-item-title>
			</v-list-item-content>
		</v-list-item>

		<v-divider></v-divider>

		<v-list-item v-for="(item, index) in items" :key="index" :to="item.link">
			<v-list-item-icon>
				<v-icon>{{ item.icon }}</v-icon>
			</v-list-item-icon>
			<v-list-item-content>
				<v-list-item-title>{{ item.title }}</v-list-item-title>
			</v-list-item-content>
		</v-list-item>
	</v-list>
</v-navigation-drawe>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
	data () {
		return {
			items: [
				{ title: 'To BUY', icon: 'mdi-basket', link: { name: 'toBuy' } },
				{ title: 'Recipe', icon: 'mdi-pasta', link: { name: 'recipe' } },
			]
		}
	},
	computed: {
		...mapGetters(['userName', 'photoURL'])
	}
}
</script>