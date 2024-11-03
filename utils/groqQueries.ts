export interface SectionBlue {
  _key?: string;
  _type?: string;
  mention?: string | null;
  [x: string]: unknown;
}

export interface SectionPink {
  _key?: string;
  _type?: string;
  say?: string | null;
  [x: string]: unknown;
}

export interface Task {
  _key?: string;
  _type?: string;
  task?: string;
  done?: boolean;
  how?: string | null;
  [x: string]: unknown;
}

export interface SectionTaskList {
  _key?: string;
  _type?: string;
  accomplishments?: Task[] | null;
  [x: string]: unknown;
}

export type Section = SectionBlue | SectionPink | SectionTaskList;

export interface ValidDocumentParams {
  slug: string;
}

export interface ValidDocumentResult {
  _id?: string;
  _type?: string;
  template: string;
  slug: { current: string };
  [x: string]: unknown;
}

export const validDocumentsGroq: string = `//groq
  *[ 
    !(_id in path("drafts.**")) && defined(template) && template != "" && defined(slug) && slug != "" && defined(slug.current) != "" && slug.current != ""
  ]{
    _id,
    _type,
    template,
    "slug": slug.current,
  } | order(_id asc)
  `;

export type ValidDocumentsResult = ValidDocumentResult[];

export const landingDocumentGroq: string = `//groq
*[_type == "landing" && slug.current == $slug]{
    template,
    slug,
    sections,
  }[0]`;

export interface LandingDocumentResult extends ValidDocumentResult {
  sections?: Section[] | null;
}

export type LandingDocumentsResult = LandingDocumentsResult[];
