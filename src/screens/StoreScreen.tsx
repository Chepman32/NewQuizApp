import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CrownIcon from '../assets/icons/CrownIcon';
import { useT } from '../i18n';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Rect, Path } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const CARD_MAX_W = 360;

export default function StoreScreen() {
  const t = useT();
  const cardWidth = Math.min(CARD_MAX_W, width - 32);
  const cardHeight = Math.max(520, Math.min(640, height * 0.72));

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}> 
      <View style={styles.screenCenter}>
        <View style={[styles.card, { width: cardWidth, height: cardHeight }]}> 
          <Svg width="100%" height="100%" style={StyleSheet.absoluteFillObject}>
            <Defs>
              <SvgLinearGradient id="cardBg" x1="0" y1="0" x2="1" y2="1">
                <Stop offset="0%" stopColor="#34206E" />
                <Stop offset="100%" stopColor="#9B335C" />
              </SvgLinearGradient>
            </Defs>
            <Rect x="0" y="0" width="100%" height="100%" rx={28} fill="url(#cardBg)" />
            <Path d="M95 22 l12 -4 M101 14 l4 12 M111 18 l-12 4" stroke="#FFD37A" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
          </Svg>

          <View style={styles.content}> 
            <CrownIcon width={Math.min(220, cardWidth * 0.55)} height={Math.min(160, cardWidth * 0.38)} />
            <Text style={styles.title}>{t('unlock_premium_title')}</Text>
            <Text style={styles.subtitle}>{t('unlock_premium_sub')}</Text>

            <TouchableOpacity style={[styles.cta, { width: cardWidth * 0.8 }]} activeOpacity={0.9}>
              <Svg width="100%" height={56}>
                <Defs>
                  <SvgLinearGradient id="btnGrad" x1="0" y1="0" x2="1" y2="1">
                    <Stop offset="0%" stopColor="#FFD86B" />
                    <Stop offset="100%" stopColor="#FF8A26" />
                  </SvgLinearGradient>
                </Defs>
                <Rect x="0" y="0" width="100%" height={56} rx={18} fill="url(#btnGrad)" />
              </Svg>
              <Text style={styles.ctaText}>{t('unlock_premium_cta')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0E1B2A' },
  screenCenter: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  card: { borderRadius: 28, overflow: 'hidden' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 24, paddingTop: 28 },
  title: { color: '#FFF4E8', fontSize: 34, fontWeight: '900', marginTop: 12, textAlign: 'center' },
  subtitle: { color: '#F6E8F5', fontSize: 18, textAlign: 'center', marginTop: 14, lineHeight: 26 },
  cta: { alignSelf: 'center', marginTop: 22, height: 56, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  ctaText: { position: 'absolute', color: '#1E1E2A', fontWeight: '900', fontSize: 18 },
});

