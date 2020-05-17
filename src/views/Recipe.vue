<template>
<v-container>
	<v-flex text-center>
		<router-link :to="{name:'recipe_edit'}">
			<v-btn class="mx-2" fab dark color="indigo">
				<v-icon dark>mdi-plus</v-icon>
			</v-btn>
		</router-link>
	</v-flex>

	<v-spacer></v-spacer>

	<v-row>
		<v-col
			v-for="(item, i) in items"
			:key="i"
			cols="12"
		>
			<v-card
				:color="item.color"
			>
				<div class="d-flex flex-no-wrap justify-space-between">
					<div>
						<v-card-title
							class="headline"
							v-text="item.title"
						></v-card-title>

						<v-card-subtitle v-text="item.artist"></v-card-subtitle>
					</div>

					<v-avatar
						class="ma-3"
						size="125"
						tile
					>
						<v-img :src="item.src"></v-img>
					</v-avatar>
				</div>

				<v-card-actions>
					<div>
						<v-switch v-model="item.isCook" class="ma-4" label="Cook"></v-switch>
						<v-btn text>Edit</v-btn>
						<v-btn text>Delete</v-btn>
					</div>

					<v-spacer></v-spacer>

					<v-btn
						icon
						@click="item.show = !item.show"
					>
						<v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
					</v-btn>
				</v-card-actions>

				<v-expand-transition>
					<div v-show="item.show">
						<v-divider></v-divider>

						<v-data-table
							:headers="headers"
							:items="item.ingredients"
							hide-default-footer
						></v-data-table>
					</div>
				</v-expand-transition>
			</v-card>
		</v-col>
	</v-row>
</v-container>

</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#fff8dc',
          src: 'https://static01.nyt.com/images/2016/11/15/dining/15COOKING-OLD-BEEF-STEW2/15COOKING-OLD-BEEF-STEW2-articleLarge.jpg',
          title: 'Beef stew',
					cookware: 'a pressure cooker',
					show: false,
					isCook: false,
					ingredients: [
						{
							name: 'beef',
							quantity: '270g'
						},
						{
							name: 'onion',
							quantity: '1'
						}
					]
        },
        {
          color: '#fdf5e6',
          src: 'https://mi-journey.jp/foodie/wp-content/uploads/2016/02/0303_paella_top.jpg',
          title: 'Seafood Paella',
					cookware: 'a pan',
					show: false,
					isCook: false,
					ingredients: [
						{
							name: 'beef',
							quantity: '270g'
						},
						{
							name: 'onion',
							quantity: '1'
						}
					]
        },
			],
			headers:[
				{
					text: 'Ingredient',
					align: 'start',
					value: 'name',
				},
				{ text: 'quantity', value: 'quantity' },
			]
    }),
  }
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>