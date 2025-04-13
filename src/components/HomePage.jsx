import {
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  Card,
  Image,
  Group,
  Stack,
  rem,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconPalette, IconPencil, IconDownload } from "@tabler/icons-react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "在线设计器",
      description: "无需设计经验，轻松创建您的专属包包设计",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
    },
    {
      title: "个性模板",
      description: "多种精美模板供您选择，快速开始设计",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
    },
    {
      title: "多种颜色",
      description: "丰富的颜色选择，打造独特风格",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
    },
  ];

  const steps = [
    {
      icon: IconPalette,
      title: "Choose a Layout",
      description:
        "Select from our pre-designed comic layouts or create your own",
    },
    {
      icon: IconPencil,
      title: "Tell your Story",
      description: "Describe your story and let AI bring it to life",
    },
    {
      icon: IconDownload,
      title: "Final Edits & Download",
      description: "Polish your creation and download in high quality",
    },
  ];

  const examples = [
    {
      title: "宠物定制",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      description: "为您的爱宠定制专属包包",
    },
    {
      title: "儿童定制",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      description: "为孩子打造独特的个性包包",
    },
    {
      title: "礼物定制",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      description: "制作独一无二的礼物",
    },
  ];

  const coloredExamples = [
    {
      image: "https://placehold.co/600x400/6b46c1/ffffff?text=Colored+Manga+1",
      description: "Ganyu is looking for flowers to pick in the forest",
    },
    {
      image: "https://placehold.co/600x400/6b46c1/ffffff?text=Colored+Manga+2",
      description: "She is startled by a sudden noise and gets ready to fight",
    },
    {
      image: "https://placehold.co/600x400/6b46c1/ffffff?text=Colored+Manga+3",
      description: "Turns out it was only Qiqi lurking in the bushes",
    },
  ];

  const bwExamples = [
    {
      image: "https://placehold.co/600x400/333333/ffffff?text=B%26W+Manga+1",
      description: "A girl is bored in class",
    },
    {
      image: "https://placehold.co/600x400/333333/ffffff?text=B%26W+Manga+2",
      description:
        "During her walk home she encounters an incredible view of the city",
    },
    {
      image: "https://placehold.co/600x400/333333/ffffff?text=B%26W+Manga+3",
      description: "She takes a selfie",
    },
  ];

  return (
    <div className={styles.root}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container size="lg">
          <Stack align="center" spacing="xl" py={80}>
            <Title order={1} className={styles.heroTitle}>
              Create Comics and Manga with AI!
            </Title>
            <Text size="xl" ta="center" maw={600}>
              Turn any story you have dreamed of into reality using Anifusion's
              powerful AI tools. Create captivating stories with just a few
              clicks and share them with the world.
            </Text>
            <Button
              size="xl"
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
            >
              Try Now For Free!
            </Button>
          </Stack>
        </Container>
      </section>

      {/* Steps Section */}
      <section className={styles.steps}>
        <Container size="lg">
          <Title order={2} ta="center" mb={50}>
            Create Comics and Manga with AI
          </Title>
          <SimpleGrid cols={3} spacing="xl">
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <step.icon size={rem(48)} className={styles.stepIcon} />
                <Title order={3} mt="md">
                  {step.title}
                </Title>
                <Text size="sm" c="dimmed" mt="sm">
                  {step.description}
                </Text>
              </div>
            ))}
          </SimpleGrid>
        </Container>
      </section>

      {/* Studio Section */}
      <section className={styles.studio}>
        <Container size="lg">
          <Title order={2} ta="center" mb={50}>
            Full-featured AI Manga Studio
          </Title>
          <Text size="lg" ta="center" mb={30}>
            No external tools or skills needed. Edit and polish your manga with
            our powerful canvas editor!
          </Text>
          <div className={styles.studioPreview}>
            <Image
              src="https://placehold.co/1200x800/9333ea/ffffff?text=AI+Manga+Studio+Interface"
              alt="AI Manga Studio Interface"
              className={styles.studioImage}
            />
          </div>
        </Container>
      </section>

      {/* Example Works Section */}
      <section className={styles.examples}>
        <Container size="lg">
          <Title order={2} ta="center" mb={50}>
            Example Works
          </Title>
          <Stack spacing="xl">
            <div className={styles.exampleCategory}>
              <Title order={3} mb={30}>
                Colored Manga
              </Title>
              <SimpleGrid cols={3} spacing="md">
                {coloredExamples.map((example, index) => (
                  <div key={index} className={styles.exampleItem}>
                    <Image
                      src={example.image}
                      alt={example.description}
                      radius="md"
                    />
                    <Text size="sm" c="dimmed" mt="sm">
                      {example.description}
                    </Text>
                  </div>
                ))}
              </SimpleGrid>
            </div>
            <div className={styles.exampleCategory}>
              <Title order={3} mb={30}>
                Black and White Manga
              </Title>
              <SimpleGrid cols={3} spacing="md">
                {bwExamples.map((example, index) => (
                  <div key={index} className={styles.exampleItem}>
                    <Image
                      src={example.image}
                      alt={example.description}
                      radius="md"
                    />
                    <Text size="sm" c="dimmed" mt="sm">
                      {example.description}
                    </Text>
                  </div>
                ))}
              </SimpleGrid>
            </div>
          </Stack>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <Container size="lg">
          <Title order={2} ta="center" mb={50}>
            Pricing
          </Title>
          <SimpleGrid cols={2} spacing="xl">
            <div className={styles.pricingCard}>
              <Title order={3}>Free Tier</Title>
              <Text size="xl" weight={700} mt="md">
                €0 /mo
              </Text>
              <ul>
                <li>20 free credits</li>
                <li>One workspace</li>
              </ul>
              <Button variant="outline" size="lg" fullWidth>
                Try Free Tier
              </Button>
            </div>
            <div className={styles.pricingCard}>
              <Title order={3}>Premium Tier</Title>
              <Text size="xl" weight={700} mt="md">
                €20 /mo
              </Text>
              <ul>
                <li>10,000 credits per month</li>
                <li>Unlimited workspaces</li>
                <li>Unlimited comic generation</li>
                <li>Use multiple LoRA models</li>
                <li>Early access to new features</li>
                <li>Export comics to Photoshop</li>
              </ul>
              <Button size="lg" fullWidth>
                Log in to subscribe
              </Button>
            </div>
          </SimpleGrid>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <Container size="lg">
          <Title order={2} ta="center" mb={50}>
            FAQ
          </Title>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <Title order={4}>How does AI manga generation work?</Title>
              <Text mt="sm">
                Our AI system uses advanced machine learning models to transform
                your text descriptions into manga-style artwork. Simply describe
                what you want to see, and our AI will create it!
              </Text>
            </div>
            <div className={styles.faqItem}>
              <Title order={4}>Do you offer a free plan?</Title>
              <Text mt="sm">
                Yes! You can start with our Free Tier which includes 20 credits
                to try out the service.
              </Text>
            </div>
            <div className={styles.faqItem}>
              <Title order={4}>How does the credit system work?</Title>
              <Text mt="sm">
                Each manga panel generation costs 1 credit. Premium users get
                10,000 credits per month, while free users start with 20
                credits.
              </Text>
            </div>
            <div className={styles.faqItem}>
              <Title order={4}>
                Can I use Anifusion for commercial purposes?
              </Title>
              <Text mt="sm">
                Yes! You have full commercial rights to all the works you create
                with Anifusion.
              </Text>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
