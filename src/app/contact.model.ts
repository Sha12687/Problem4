// contact.model.ts

export class Contact {
    constructor(public firstName: string, public mailId: string) {}
  
    setId(contactId: number): void {
      this.id = contactId;
    }
  
    getId(): number | undefined {
      return this.id;
    }
  
    setEmail(email: string): void {
      this.mailId = email;
    }
  
    getEmail(): string {
      return this.mailId;
    }
  
    private id: number | undefined;
  }
  