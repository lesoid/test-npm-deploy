export default defineNuxtRouteMiddleware(() => {
    console.log("!!!Проверка мидлеваре глобал")
    const res = useResets();
    res.value = true;
  });