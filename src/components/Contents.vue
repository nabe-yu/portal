<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <div
          class="p-4 lg:w-1/2"
          v-for="category in categories"
          :key="category.name"
        >
          <div
            class="
              h-full
              bg-gray-100 bg-opacity-75
              px-8
              pt-16
              pb-24
              rounded-lg
              overflow-hidden
              text-left
              relative
            "
          >
            <h1
              class="
                title-font
                sm:text-2xl
                text-xl
                font-medium
                text-gray-900
                mb-3
              "
            >
              ● {{ category.name }}
            </h1>
            <div v-for="section in category.sections" :key="section.name">
              <h2
                class="
                  title-font
                  sm:text-1xl
                  text-lg
                  font-medium
                  text-gray-900
                  mb-3
                "
              >
                {{ section.name }}
              </h2>
              <div v-for="link in section.links" :key="link.name">
                <a
                  href="https://example.com"
                  target="_blank"
                  class="underline text-blue-700 text-lg"
                  >{{link.name}}</a
                >
                <p class="leading-relaxed mb-3 text-sm">
                  {{link.discription}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contents",
  data() {
    return {
      categories: [
        {
          name: "情報システム",
          sections: [
            {
              name: "社内ネットワーク",
              links: [
                {
                  name: "AP一覧",
                  url: "https://example.com",
                  discription:
                    "社内に設置しているアクセスポイントを確認できます。",
                },
                {
                  name: "障害情報",
                  url: "https://example.com",
                  discription: "お問い合わせ前に一読願います。",
                },
              ],
            },
            {
              name: "ウイルス対策",
              links: [
                {
                  name: "推奨ソフトウェア",
                  url: "https://example.com",
                  discription: "お問い合わせ前に一読願います。",
                },
                {
                  name: "インストールマニュアル",
                  url: "https://example.com",
                  discription: "お問い合わせ前に一読願います。",
                },
              ],
            },
          ],
        },
        {
          name: "教育・研修",
          sections: [
            {
              name: "資格試験",
              links: [
                {
                  name: "資格一覧",
                  url: "https://example.com",
                  discription: "お問い合わせ前に一読願います。",
                },
                {
                  name: "受験マニュアル",
                  url: "https://example.com",
                  discription: "お問い合わせ前に一読願います。",
                },
              ],
            },
            {
              name: "研修制度",
              links: [
                {
                  name: "オンライン研修の受講について",
                  url: "https://example.com",
                  discription: "お問い合わせ前に一読願います。",
                },
                {
                  name: "オンサイト研修の受講について",
                  url: "https://example.com",
                  discription: "お問い合わせ前に一読願います。",
                },
                {
                  name: "よくある質問",
                  url: "https://example.com",
                  discription: "お問い合わせ前に一読願います。",
                },
              ],
            },
          ],
        },
        {
          name: "福利厚生",
          sections: [
            {
              name: "福利厚生チケット",
              links: [
                {
                  name: "福利厚生チケットとは",
                  url: "https://example.com",
                  discription:
                    "",
                },
                {
                  name: "利用可能施設",
                  url: "https://example.com",
                  discription: "お問い合わせ前に一読願います。",
                },
              ],
            },
            {
              name: "ウイルス対策",
              links: [
                {
                  name: "推奨ソフトウェア",
                  url: "https://example.com",
                  discription: "お問い合わせ前に一読願います。",
                },
                {
                  name: "インストールマニュアル",
                  url: "https://example.com",
                  discription: "お問い合わせ前に一読願います。",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
