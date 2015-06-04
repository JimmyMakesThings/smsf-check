import _ from 'lodash';

export default {
  locales: [ 'en' ],
  messages: {

    home: {
      hero: {
        intro:
          `Welcome to the {brand} SMSF Health Check tool, <strong>{name}</strong>.
           Compare your current fund to thousands of others SMSFs
           to see how your fund stacks up.`,
        signup: { actionLabel: 'Sign up' },
      },
      features: {
        safeData: 'Know your data is safe <br class="visible-md visible-lg" /> with bank-level <br class="visible-md visible-lg"/> security.',
        greatAdvice: 'Provide as much or as little information as you like and still receive great general advice.',
        compare: 'Compare your fund to over 11,000 funds from ATO and {name} databases.',
      },
      adviceDisclaimer:
        `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
         aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    },

    footer: {
      copyright: '© {year} {brand}. All rights reserved.',
      links: {
        guide: 'Financial Services Guide',
        terms: 'Terms of Use',
        privacy: 'Privacy',
        signOut: 'Sign Out',
      }
    },

    privacy: {
      title: 'Privacy Policy',
      heading: 'Privacy Policy',
    },

    terms: {
      title: 'Terms of Use',
      heading: 'Terms of Use',
    },

    confirmEmail: {
      title: 'Confirm Your Email Address',
      heading: 'Begin your {name} journey',
      subHeading: 'Select a password for your account below and start comparing your fund to 11,000 others.',
      submit: { actionLabel: 'Create my {name} password', loadingLabel: 'Please wait...', },
    },

    register: {
      title: 'Register',
      intro:
        `So we can remember who you are, and identify your fund, please enter the details below.<br>
         Your information will never be used for any purposes outside of this helpful tool.`,
      submit: { actionLabel: 'Register', loadingLabel: 'Please wait...', },
      already: { note: 'Already registered?', actionLabel: 'Log In', },
      successful: `Thank you for signing up. We've sent you an email with instructions on how to log in.`,
    },

    signin: {
      title: 'Log In',
      heading: 'Log In to your Health Check',
      subHeading: 'Please enter the details below to access your {name} account.',
      submit: { actionLabel: 'Log In Now', loadingLabel: 'Please wait...', },
      needAccount: { note: 'Need an account?', actionLabel: 'Register', },
    },

    signout: {
      signingOut: 'Please wait... currently signing you out of {name}.',
      signedOut: 'You are now signed out of {name}.',
    },

    notFound: {
      title: '404 Not Found',
      heading: 'Sorry, the page you tried cannot be found.',
      incorrect: 'You may have typed the address incorrectly or you may have used an outdated link.',
      contactUs: 'If you found a broken link from another site or from our site, please contact us.',
    },

    members: {
      title: 'Member Details',
      longTitle: 'Your SMSF Member Details',
      question: 'Tell us a little about the members of your fund.',

      gender: { label: 'Gender' },
      dateOfBirth: { label: 'Date of Birth' },
      preRetirementAnnualIncome: { label: 'Pre-retirement Annual Income' },
      currentMemberBalance: { label: 'Current Member Balance' },
      isRetired: {
        label: 'Is the member retired?',
        options: { yes: 'Yes', no: 'No' },
      },

      add: { actionLabel: 'Add a member' },
      delete: { confirmation: 'Are you sure you would like to remove this member?' },
    },

    trust: {
      title: 'Trust Structure',
      longTitle: 'Your SMSF Trust Structure',

      trusteeType: {
        question: 'What type of trustee does your fund have?',
        options: [
          { value: 'individuals', label: 'Individuals as Trustee' },
          { value: 'corporate', label: 'Corporate trustee' },
        ],
        advice: 'Do I have the right type of trustee?',
      },

      deedSupplier: {
        question: 'Who supplied the trust deed for you fund?',
        options: [ 'Unknown', 'Freehills', 'Madgwicks', 'SuperCentral' ],
      },

      yearLastUpdated: {
        question: 'In which year was your trust fund last updated?',
        options: _.times(20, (i) => (new Date().getFullYear() - i).toString()),
        advice: 'Should I upgrade my trust deed?',
      },
    },

    accounting: {
      title: 'Tax & Accounting',
      longTitle: 'Tax & Accounting',

      whoDoesIt: {
        question: 'Who does the accounting and tax work for your fund?',
        options: [
          { value: 'myself', label: 'I do it myself' },
          { value: 'accountant', label: 'My accountant does it' },
          { value: 'administrator', label: 'A SMSF administrator does it' },
          { value: 'financial-planner', label: 'My Financial Planner does it' },
        ],
        advice: 'Should I use a professional administrator?',
      },

      costPerYear: {
        question: 'How much does it cost per year?',
        options: [
          '< $1,000',
          '$1,001 - $1,500',
          '$1,501 - $2,000',
          '$2,001 - $2,500',
          '$2,501 - $3,000',
          '$3,001 - $3,500',
          '$3,500+',
        ],
        advice: 'Am I paying too much tax and accounting?',
      },
    },

    investmentAdvice: {
      title: 'Investment Advice',
      longTitle: 'Investment Advice',

      whoDoesIt: {
        question: 'Who provides investment advice for your fund?',
        options: [
          { value: 'myself', label: 'I do it myself' },
          { value: 'financial-planner', label: 'My Financial Planner does it' },
          { value: 'accountant', label: 'My accountant does it' },
        ],
        advice: 'Should I get professional investment advice?',
      },

      costPerYear: {
        question: 'How much does it cost per year?',
        options: [
          '< $1,000',
          '$1,001 - $1,500',
          '$1,501 - $2,000',
          '$2,001 - $2,500',
          '$2,501 - $3,000',
          '$3,001 - $3,500',
          '$3,500+',
        ],
        advice: 'Am I paying too much for investment advice?',
      },
    },

    investmentStrategy: {
      title: 'Investment Strategy',
      longTitle: 'Investment Strategy',
    },

    deathBenefits: {
      title: 'Death Benefits',
      longTitle: 'Death Benefits',
    },

    insurance: {
      title: 'Insurance',
      longTitle: 'Insurnace',
    },

    pensions: {
      title: 'Pensions',
      longTitle: 'Pensions',
    },

    contributions: {
      title: 'Contributions',
      longTitle: 'Contributions',
    },

    results: {
      title: 'Results',
      longTitle: 'Results',
    },

    shared: {
      navbar: {
        signin: { actionLabel: 'Log In' },
        save: { actionLabel: 'Save', disabledLabel: 'Saved', loadingLabel: 'Saving...' },
      },

      fields: {
        user: {
          firstName: { placeholder: 'Enter your first name...' },
          lastName: { placeholder: 'Enter your last name...' },
          email: { placeholder: 'Enter your email address...' },
          password: { placeholder: 'Enter your password...' },
          passwordConfirmation: { placeholder: 'Confirm your password...' },
          fundName: { placeholder: 'The name of your fund...' },
          fundAbn: { placeholder: 'Your fund\'s ABN...' },

          doesConsent: {
            label:
              `I am happy for {brand} to use the information I provide to compare my fund to other funds
               and to provide me with information relevant to me and my fund.`,
          },
        },
      },

      actions: {
        skipStep: { actionLabel: 'Skip this step' },
        prevStep: { actionLabel: 'Previous' },
        nextStep: { actionLabel: 'Next Step', loadingLabel: 'Please wait...' },
      },

      beforeUnload: { message: 'You have unsaved changes. If you leave before saving, your changes will be lost.' },
    },

  }
};
