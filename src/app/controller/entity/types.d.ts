export namespace IEntity {
  namespace Request {
    interface getById {
      params: {
        id: number;
      };
    }
    interface create {
      body:{
        title:string
        name: string
      }
    }
    interface update {
      params: {
        id:number
      }
      body: {
        title: string
      }
    }
    interface destroy {
      params: {
        id: number;
      };
    }
  }
}
