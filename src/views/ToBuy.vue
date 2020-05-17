<template>
	<v-container text-xs-center justify-center>
		<v-layout row wrap>
			<v-flex xs12>
				<h1>TO BUY LIST</h1>
			</v-flex>

			<v-flex xs12 mt-5 mr-5 text-right>
        <router-link>
          <v-btn color="info">
						add
          </v-btn>
        </router-link>
      </v-flex>

		</v-layout>

	</v-container>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  created () {
    // this.addresses = this.$store.state.addresses
  },
  data () {
    // return {
    //   headers: [
    //     { text: '名前', value: 'name' },
    //     { text: '電話番号', value: 'tel' },
    //     { text: 'メールアドレス', value: 'email' },
    //     { text: '住所', value: 'address' },
    //     { text: '操作', value: 'action', sortable: false }
    //   ],
    //   addresses: []
    // }
  },
  methods: {
    // deleteConfirm (id) {
    //   if (confirm('削除してよろしいですか？')) {
    //     this.deleteAddress({ id })
    //   }
    // },
    // ...mapActions(['deleteAddress'])
  }
}
</script>

<style></style>