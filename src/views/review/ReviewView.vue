<script setup>
import { ref } from "vue";
import { mdiMagnify } from "@mdi/js";
const tab = ref(null);
</script>

<template>
  <v-container>
    <div class="centered-content my-12">
      <p class="text-h4 font-weight-bold my-4">다른 여행지는 어떠세요?</p>
      <v-text-field
        density="compact"
        label="여행지 검색.."
        rounded="lg"
        variant="outlined"
        width="600"
        flat
        single-line
        :prepend-inner-icon="mdiMagnify"
        @click:prepend-inner="console.log('함수넣으셈')"
      >
      </v-text-field>
    </div>

    <v-card>
      <v-tabs v-model="tab" align-tabs="center" color="primary">
        <v-tab :value="1">명소</v-tab>
        <v-tab :value="2">음식점</v-tab>
        <v-tab :value="3">축제</v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item v-for="n in 3" :key="n" :value="n">
          <v-container fluid>
            <v-row>
              <v-col v-for="i in 6" :key="i" cols="12" md="4">
                <v-img
                  :lazy-src="`https://picsum.photos/10/6?image=${
                    i * n * 5 + 10
                  }`"
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  height="205"
                  cover
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card>
  </v-container>
</template>

<style scoped>
.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
