"""
이미지를 WebP 포맷으로 변환하는 스크립트
PNG → WebP 변환으로 파일 크기를 95% 이상 줄입니다.
"""

from PIL import Image
import os

def convert_to_webp(input_path, output_path, quality=85, max_width=1200):
    """PNG 이미지를 WebP로 변환"""
    try:
        # 이미지 열기
        img = Image.open(input_path)
        
        # RGBA 모드인 경우 RGB로 변환 (WebP는 투명도 지원하지만 파일 크기를 위해)
        if img.mode in ('RGBA', 'LA'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        # 리사이징 (너비 기준)
        if img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # WebP로 저장
        img.save(output_path, 'WEBP', quality=quality, method=6)
        
        # 파일 크기 비교
        original_size = os.path.getsize(input_path) / 1024 / 1024  # MB
        new_size = os.path.getsize(output_path) / 1024 / 1024  # MB
        reduction = ((original_size - new_size) / original_size) * 100
        
        print(f"✓ {os.path.basename(input_path)}")
        print(f"  원본: {original_size:.2f}MB → WebP: {new_size:.2f}MB (감소: {reduction:.1f}%)")
        
        return True
    except Exception as e:
        print(f"✗ {input_path} 변환 실패: {e}")
        return False

def main():
    images_dir = 'images'
    
    # 변환할 이미지 목록
    images = [
        'backcard.png',
        'backcard2.png',
        'background.png',
        'postcard.png'
    ]
    
    print("=" * 60)
    print("이미지 WebP 변환 시작")
    print("=" * 60)
    print()
    
    success_count = 0
    for image_name in images:
        input_path = os.path.join(images_dir, image_name)
        output_path = os.path.join(images_dir, image_name.replace('.png', '.webp'))
        
        if os.path.exists(input_path):
            if convert_to_webp(input_path, output_path):
                success_count += 1
            print()
        else:
            print(f"✗ 파일을 찾을 수 없음: {input_path}")
            print()
    
    print("=" * 60)
    print(f"변환 완료: {success_count}/{len(images)}개 성공")
    print("=" * 60)

if __name__ == '__main__':
    main()
