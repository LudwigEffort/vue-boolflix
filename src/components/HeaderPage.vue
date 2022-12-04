<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
        >Boolflix</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarScroll"
          class="collapse navbar-collapse justify-content-end"
        >
          <form
            class="d-flex"
            role="search"
            @submit.prevent="$emit('querySearch', queryString)"
          >
            <input
              v-model="queryString"
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            >
            <select
              id=""
              class="form-select"
              name=""
              aria-label="Default select example"
            >
              <option value="">
                Choose genre
              </option>
            </select>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      queryString: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  color: red;
  font-size: 1.5rem;
}
.navbar-brand:hover {
  color: red;
}
.navbar-toggler{
  border: var(--bs-border-width) solid white;
}
.navbar {
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e");
}
</style>
