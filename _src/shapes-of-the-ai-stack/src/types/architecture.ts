export interface DataStackComponent {
  id: string;
  name: string;
  category: string;
  description: string;
  typicalVendors: string[];
}

export interface StackView {
  id: 'functional' | 'control-plane' | 'substrate' | 'ownership';
  title: string;
  subtitle: string;
  axis: string;
  coreQuestion: string;
  thesis: string;
  strategicTakeaway: string;
  vendorStance: string;
}

export interface Invariant {
  id: 'inf' | 'ctx' | 'act' | 'rec' | 'jud';
  name: string;
  shortDefinition: string;
  deepDescription: string;
  whyContested: string;
  analogy: string;
}

export type InvariantStance = 'first-class' | 'absent' | 'outsourced' | 'commoditized' | 'bundled';

export interface ShapeInvariantDetail {
  invariantId: 'inf' | 'ctx' | 'act' | 'rec' | 'jud';
  stance: InvariantStance;
  stanceLabel: string;
  detail: string;
  strategicImplication: string;
}

export interface AIShape {
  id: string;
  name: string;
  tagline: string;
  paradigm: string;
  heroQuote: string;
  exemplars: string[];
  invariants: Record<'inf' | 'ctx' | 'act' | 'rec' | 'jud', ShapeInvariantDetail>;
  runtimeStance: string;
  missingHole: string;
  whyTheyWin: string;
  whyTheyFail: string;
  artifactProduced: string;
  ownershipProfile: {
    mlEng: string;
    platform: string;
    security: string;
    bizDev: string;
  };
}

export interface InteractiveStackSelection {
  inferenceProvider: string;
  contextSource: string;
  actionGateway: string;
  orchestrator: string;
  evalObservability: string;
}
