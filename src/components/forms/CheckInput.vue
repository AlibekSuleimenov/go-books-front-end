<template>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" :checked="checked" :required="required">
        <label class="form-check-label" :for="name">
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    name: 'CheckInput',
    props: ["label", "required", "name", "value", "checked"],
}
</script>