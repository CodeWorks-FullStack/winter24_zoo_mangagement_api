export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
  }

  get AccountCardTemplate() {
    return /*html*/`
    <div class="card text-center" style="width:18em">
      <img src="${this.picture}" title="${this.name}-picture" alt="account-picture" />
      <div class="card-body">
        <p class="fs-4 lead">${this.name}</p>
      </div>
    </div>
    `
  }
}