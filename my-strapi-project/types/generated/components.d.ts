import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsManifestoSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_manifesto_sections';
  info: {
    displayName: 'Manifesto Section';
  };
  attributes: {
    Content: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.manifesto-section': SectionsManifestoSection;
    }
  }
}
