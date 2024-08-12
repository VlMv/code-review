export default class GitHub {
  constructor(methods) {
    methods.forEach(method => {
      this[method.name] = method;
    });
  }
}
