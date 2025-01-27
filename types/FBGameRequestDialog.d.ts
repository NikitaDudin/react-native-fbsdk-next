import type {
  GameRequestContent,
} from './models/FBGameRequestContent';

export default class FBGameRequestDialog {
  /**
     * Check if the dialog can be shown.
     */
  canShow(): Promise<any>;
  /**
     * Shows the dialog using the specified content.
     */
  show(gameRequestContent: GameRequestContent): Promise<any>;
}
