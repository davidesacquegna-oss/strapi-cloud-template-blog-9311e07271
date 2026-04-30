import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    Bio: Schema.Attribute.Text;
    Quote_1: Schema.Attribute.String;
    Quote_2: Schema.Attribute.String;
    Role_Card: Schema.Attribute.Component<'shared.role-card', true>;
    Titolo: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    Color: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'selected', 'success', 'warning']
    >;
    size: Schema.Attribute.Enumeration<['normal', 'big', 'small']>;
    Text: Schema.Attribute.String;
    Type: Schema.Attribute.Enumeration<['link', 'filled', 'outline']>;
    URL: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    CTAbutton: Schema.Attribute.Component<'shared.button', false>;
    Description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedContactStrip extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_strips';
  info: {
    displayName: 'Contact_Strip';
  };
  attributes: {
    Email: Schema.Attribute.Email;
    Sfondo_Colore: Schema.Attribute.String;
    Titolo: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    CTA: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    AboutSection: Schema.Attribute.Component<'shared.about-section', false>;
    Call_to_Action: Schema.Attribute.Component<'shared.button', true>;
    Claim: Schema.Attribute.String;
    CTA_2: Schema.Attribute.Component<'shared.button', false>;
    ImmagineSfondo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Photo_Tag: Schema.Attribute.String;
    Sottotitolo: Schema.Attribute.String;
    TechStack: Schema.Attribute.Component<'shared.tech-stack', false>;
    TItolo: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    ImmagineSfondo: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    logo_animation: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Titolo: Schema.Attribute.String;
  };
}

export interface SharedMenuLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_links';
  info: {
    displayName: 'MenuLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedProjectGrid extends Struct.ComponentSchema {
  collectionName: 'components_shared_project_grids';
  info: {
    displayName: 'ProjectGrid';
  };
  attributes: {
    Mostra_Filtri: Schema.Attribute.Boolean;
    Numero_Elementi: Schema.Attribute.Integer;
    Titolo_Sezione: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    Bio: Schema.Attribute.RichText;
  };
}

export interface SharedRoleCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_role_cards';
  info: {
    displayName: 'Role_Card';
  };
  attributes: {
    Card_Background: Schema.Attribute.String;
    Role_Icon: Schema.Attribute.String;
    Role_Text: Schema.Attribute.String;
    Role_Title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    CaroselloProgetti: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTechStack extends Struct.ComponentSchema {
  collectionName: 'components_shared_tech_stacks';
  info: {
    displayName: 'TechStack';
  };
  attributes: {
    Skills_Array: Schema.Attribute.JSON;
    Titolo_Sezione: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-section': SharedAboutSection;
      'shared.button': SharedButton;
      'shared.card': SharedCard;
      'shared.contact-strip': SharedContactStrip;
      'shared.cta': SharedCta;
      'shared.hero': SharedHero;
      'shared.media': SharedMedia;
      'shared.menu-link': SharedMenuLink;
      'shared.project-grid': SharedProjectGrid;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.role-card': SharedRoleCard;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tech-stack': SharedTechStack;
    }
  }
}
