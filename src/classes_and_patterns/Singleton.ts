class Singleton {
   private static instance: Object
   constructor() {
      if (typeof Singleton.instance === 'object') {
         return Singleton.instance
      }
      Singleton.instance = this
      return this
   }
}
