import { createNamespace } from '../../utils';
import { t, bem } from '../utils';

const [createComponent] = createNamespace('calendar-header');

export default createComponent({
  props: {
    title: String,
    showTitle: Boolean,
    monthTitle: String,
  },

  methods: {
    genTitle() {
      if (!this.showTitle) {
        return;
      }

      const title = this.slots('title') || this.title || t('title');
      return <div class={bem('header-title')}>{title}</div>;
    },

    genMonth() {
      return <div class={bem('month-title')}>{this.monthTitle}</div>;
    },

    genWeekDays() {
      const weekdays = t('weekdays');

      return (
        <div class={bem('weekdays')}>
          {weekdays.map(item => (
            <span class={bem('weekday')}>{item}</span>
          ))}
        </div>
      );
    },
  },

  render() {
    return (
      <div class={bem('header')}>
        {this.genTitle()}
        {this.genMonth()}
        {this.genWeekDays()}
      </div>
    );
  },
});
