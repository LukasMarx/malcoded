<script>
export default {
  validate({ params }) {
    if (!params.post) {
      return false;
    }
    return true;
  }
};
</script>
