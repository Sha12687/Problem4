// contact.model.spec.ts

import { Contact } from './contact.model';

describe('Contact Class', () => {
  it('should have a valid constructor', () => {
    const contact = new Contact('John', 'john@example.com');
    expect(contact).toBeTruthy();
    expect(contact instanceof Contact).toBeTruthy();
  });

  it('should set first name through constructor', () => {
    const contact = new Contact('John', 'john@example.com');
    expect(contact.firstName).toBe('John');
  });

  it('should get and set ID', () => {
    const contact = new Contact('John', 'john@example.com');
    contact.setId(123);
    expect(contact.getId()).toBe(123);
  });

  it('should get and set email', () => {
    const contact = new Contact('John', 'john@example.com');
    contact.setEmail('newjohn@example.com');
    expect(contact.getEmail()).toBe('newjohn@example.com');
  });
});
